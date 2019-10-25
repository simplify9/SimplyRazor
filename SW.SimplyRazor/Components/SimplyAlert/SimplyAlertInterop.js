(function () {
    window.simplyAlertInterop = {

        showAlert: function (element, dotNetRef) {

            var alert = new Alert(element);

            element.addEventListener('closed.bs.alert', function (event) {
                // do something when this event triggers
                // event.target is the modal referenced in myModal
                // event.relatedTarget is the button referenced with myModalTriggerButton
                dotNetRef.invokeMethodAsync('OnAlertClosed');

            }, false);
        },

        closeAlert: function (element) {

            var alert = new Alert(element);
            alert.close();

        }
    }


})();