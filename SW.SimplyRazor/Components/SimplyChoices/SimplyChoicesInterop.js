(function () {
    window.simplyChoicesInterop = {

        init: function (element, dotNetObjRef) {

            window['choices'] = new Choices(element);

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

        setChoices: function (data, value, label) {

            window['choices'].setChoices(data, value, label, true);
        }
    };

})();
