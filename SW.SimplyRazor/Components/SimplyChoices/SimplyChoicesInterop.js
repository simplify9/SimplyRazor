(function () {
    window.simplyChoicesInterop = {

        init: function (element, dotNetObjRef, id, searchFloor) {

            window[id] = new Choices(element, {
                searchFloor: searchFloor,



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

        destroy: function (id) {

            window[id].destroy();
        },

    };

})();
