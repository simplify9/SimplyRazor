(function () {
    window.simplyDateInterop = {

        init: function (element, dotNetObjRef, id, defaultDate, mode, enableTime) {

            window[id] = flatpickr(element, {
                defaultDate: defaultDate,
                mode: mode,
                enableTime: enableTime,
                allowInput: ((mode == 'single') ? false : false),
                onValueUpdate: function (selectedDates, dateStr, instance) {
                    dotNetObjRef.invokeMethodAsync('OnValueUpdate', selectedDates);
                },
                //onChange: function (selectedDates, dateStr, instance) {
                //    dotNetObjRef.invokeMethodAsync('OnChange', selectedDates);
                //},

            });

        },

        destroy: function (id) {

            window[id].destroy();
        },

        setDate: function (id, date) {

            window[id].setDate(date);
        },

        getDate: function (id) {

            return window[id].selectedDates;
        },

        clear: function (id) {

            window[id].clear();
        },
    };

})();
