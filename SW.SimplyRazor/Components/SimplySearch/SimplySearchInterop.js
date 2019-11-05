(function () {
    window.simplySearchInterop = {

        init: function (element, id, dotNetRef, columns, url) {

            window[id] = new Tabulator(element, {
                placeholder: "No Data Available", //display message to user on empty table
                //pagination: "remote", //enable remote pagination
                ajaxProgressiveLoad: "scroll", //enable progressive loading
                ajaxProgressiveLoadScrollMargin: 300, //triger next ajax load when scroll bar is 300px or less from the bottom of the table.
                ajaxSorting: true, //send sort data to the server instead of processing locally
                //ajaxFiltering: true, 
                paginationSize: 20, //optional parameter to request a certain number of rows per page
                //paginationDataSent: {
                //    "page": "pageNumber", //change page request parameter to "pageNo"
                //    "size": "pageSize"
                //},
                //paginationDataReceived: {
                //    "last_page": "totalPages", //change last_page parameter name to "max_pages"
                //    "data" : "result"
                //},
                ajaxURL: `${url}?`,
                //ajaxConfig: "GET",
                //ajaxContentType: "json",
                //ajaxParams: {
                //    searchyFilters: []
                //    //key2: "value2"
                //}, //ajax parameters
                ajaxURLGenerator: function (url, config, params) {
                    //url - the url from the ajaxURL property or setData function
                    //config - the request config object from the ajaxConfig property
                    //params - the params object from the ajaxParams property, this will also include any pagination, filter and sorting properties based on table setup
                    const sortStr = params.sorters.map(s => `sort=${s.field}:${(s.dir == "asc") ? 1 : 2}`).join('&');
                    //return request url
                    return url + `count=true&page=${params.page - 1}&size=${params.size}&${sortStr}`; //encode parameters as a json object
                },
                ajaxResponse: function (url, params, response) {
                    //url - the URL of the request
                    //params - the parameters passed with the request
                    //response - the JSON object returned in the body of the response.
                    
                    const rq = {
                        data: response.result,
                        last_page: Math.ceil(response.totalCount / 20)
                    };

                    return rq; //return the tableData property of a response json object
                },
                ajaxError: function (error) {

                    dotNetRef.invokeMethodAsync('ReportError', error);
                },
                //ajaxRequestFunc: (url, config, params) =>
                //{

                //    //url - the url of the request
                //    //config - the ajaxConfig object
                //    //params - the ajaxParams object

                //    const rq = {
                //        ...params,
                //        pageIndex: params.pageNumber - 1,
                //        countRows: true
                //    };
                //    return fetch(url,
                //        {
                //            method: 'POST', // *GET, POST, PUT, DELETE, etc.
                //            headers:
                //            {
                //                'Content-Type': 'application/json'
                //            },
                //            body: JSON.stringify(rq)
                //        }) // body data type must match "Content-Type" header
                //        .then(res => res.json())
                //        .then(json => ({
                //            ...json,
                //            totalPages: Math.ceil(json.totalCount / params.pageSize)
                //        })); //response type

                //    //return promise
                //    //return new Promise(function (resolve, reject) {
                //    //    //do some async data retrieval then pass the array of row data back into Tabulator
                //    //    resolve(data);

                //    //    //if there is an error call this function and pass the error message or object into it
                //    //    reject();
                //    //});
                //},
                height: 400, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
                data: [], //assign data to table
                layout: "fitColumns", //fit columns to width of table (optional)
                columns: columns,
                rowClick: function (e, row) { //trigger an alert message when the row is clicked
                    //alert("Row " + row.getData().id + " Clicked!!!!");
                },
            });

            //window[id].setData();

        },

        setFilter: function (id, filtersQueryString, url) {

            window[id].setData(`${url}?${filtersQueryString}&`);
            //window[id].setFilter(filters);
        }
    }

})();