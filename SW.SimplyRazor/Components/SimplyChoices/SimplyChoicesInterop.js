(function () {
    window.simplyChoicesInterop = {

        init: function (element, dotNetObjRef, id, searchFloor, placeholder) {

            window[id] = new Choices(element, {
                searchFloor: searchFloor,
                searchPlaceholderValue: placeholder

            });

            element.addEventListener(
                'search',
                function (event) {

                    dotNetObjRef.invokeMethodAsync('OnSearch', event.detail.value, event.detail.resultCount);
                },
                false,
            );

            element.addEventListener(
                'change',
                function (event) {

                    dotNetObjRef.invokeMethodAsync('OnChange', event.detail.value);
                },
                false,
            );
        },

        setChoices: function (id, data, value, label) {

            window[id].setChoices(data, value, label, true);
        },

        setChoice: function (id, value) {

            window[id].setChoiceByValue(value);
        },

        destroy: function (id) {

            window[id].destroy();
        },

        disable: function (id) {

            window[id].disable();
        },

        enable: function (id) {

            window[id].enable();
        },

    };

})();
