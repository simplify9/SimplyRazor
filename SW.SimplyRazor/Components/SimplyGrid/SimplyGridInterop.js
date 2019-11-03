(function () {
    window.simplyGridInterop = {

        init: function (element, columns, dotNetRef) {

            //define some sample data
            //var tabledata = [
            //    { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
            //    { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
            //    { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
            //    { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
            //    { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
            //];


            //create Tabulator on DOM element with id "example-table"
            var table = new Tabulator(element, {
                //pagination: "remote", //enable remote pagination
                ajaxProgressiveLoad: "scroll", //enable progressive loading
                ajaxProgressiveLoadScrollMargin: 300, //triger next ajax load when scroll bar is 300px or less from the bottom of the table.

                paginationSize: 20, //optional parameter to request a certain number of rows per page
                paginationDataSent: {
                    "page": "pageNumber", //change page request parameter to "pageNo"
                    "size": "pageSize"
                },
                paginationDataReceived: {
                    "last_page": "totalPages", //change last_page parameter name to "max_pages"
                    "data" : "result"
                },

                ajaxURL: "https://localhost:5001/mapi/sw.bogusdatamodels.employee/search",
                ajaxConfig: "POST",
                ajaxContentType: "json",
                //ajaxResponse: function (url, params, response) {
                //    //url - the URL of the request
                //    //params - the parameters passed with the request
                //    //response - the JSON object returned in the body of the response.

                //    return response.result; //return the tableData property of a response json object
                //},
                ajaxRequestFunc: (url, config, params) =>
                {

                    //url - the url of the request
                    //config - the ajaxConfig object
                    //params - the ajaxParams object

                    const rq = {
                        ...params,
                        pageIndex: params.pageNumber - 1,
                        countRows: true
                    };
                    return fetch(url,
                        {
                            method: 'POST', // *GET, POST, PUT, DELETE, etc.
                            headers:
                            {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(rq)
                        }) // body data type must match "Content-Type" header
                        .then(res => res.json())
                        .then(json => ({
                            ...json,
                            totalPages: Math.ceil(json.totalCount / params.pageSize)
                        })); //response type

                    //return promise
                    //return new Promise(function (resolve, reject) {
                    //    //do some async data retrieval then pass the array of row data back into Tabulator
                    //    resolve(data);

                    //    //if there is an error call this function and pass the error message or object into it
                    //    reject();
                    //});
                },
                height: 300, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
                //data: tabledata, //assign data to table
                layout: "fitColumns", //fit columns to width of table (optional)
                columns: columns

                    //[ //Define Table Columns
                    //{ title: "Name", field: "name", width: 150 },
                    //{ title: "Age", field: "age", align: "left", formatter: "progress" },
                    //{ title: "Favourite Color", field: "col" },
                    //{ title: "Date Of Birth", field: "dob", sorter: "date", align: "center" },
                    //]
                ,
                rowClick: function (e, row) { //trigger an alert message when the row is clicked
                    alert("Row " + row.getData().id + " Clicked!!!!");
                },
            });

            table.setData("https://localhost:5001/mapi/sw.bogusdatamodels.employee/search",
                {
                    "countRows": true
                })

        },

        hideModal: function (element) {



        }
    }

})();