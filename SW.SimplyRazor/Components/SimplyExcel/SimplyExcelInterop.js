(function () {
    window.simplyExcelInterop = {

        init: function (element, id, dotNetObjRef) {

            var data = [
                ['Mazda', 2001, 2000, '2006-01-01'],
                ['Pegeout', 2010, 5000, '2005-01-01'],
                ['Honda Fit', 2009, 3000, '2004-01-01'],
                ['Honda CRV', 2010, 6000, '2003-01-01'],
            ];

            window[id] = jexcel(document.getElementById(element), {
                data: data,
                rowResize: true,
                columnDrag: true,
                columns: [
                    { type: 'text', width: '200', title: 'Model' },
                    { type: 'text', width: '100', title: 'Year'  },
                    { type: 'text', width: '100', title: 'Year1' },
                    { type: 'calendar', width: '100', title: 'Date' },
                ],
                onafterchanges: function (element, records) {
                    //console.log("change!"); 
                    dotNetObjRef.invokeMethodAsync('OnValueUpdate', window[id].getData());
                },
            });

        },

        destroy: function (element) {

            jexcel.destroy(document.getElementById(element), true);
        },

    };

})();
