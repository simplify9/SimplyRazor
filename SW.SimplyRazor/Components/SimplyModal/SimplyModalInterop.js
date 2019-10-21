(function () {
    window.simplyModalInterop = {

        setFocus: function (element) {
            //element.focus();

            const inputElements = element.getElementsByTagName('input')
            if (inputElements.length > 0) {
                inputElements.item(0).focus();
            }
        }
    }






})();