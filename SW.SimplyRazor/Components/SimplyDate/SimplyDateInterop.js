(function () {
    window.simplyDateInterop = {

        init: function (element, dotNetObjRef, id, defaultDate, mode) {

            window[id] = flatpickr(element, {
                defaultDate: defaultDate,
                mode: mode,
                allowInput: ((mode == 'single') ? true : false),
                onValueUpdate: function (selectedDates, dateStr, instance) {
                    dotNetObjRef.invokeMethodAsync('OnValueUpdate', selectedDates);
                },
                onChange: function (selectedDates, dateStr, instance) {
                    dotNetObjRef.invokeMethodAsync('OnChange', selectedDates);
                },

            });

        },

        destroy: function (id) {

            window[id].destroy();
        },

        //disable: function (id) {

        //    window[id].disable();
        //},

        //enable: function (id) {

        //    window[id].enable();
        //},

    };

})();
