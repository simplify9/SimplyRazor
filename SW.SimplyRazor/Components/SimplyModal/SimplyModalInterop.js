(function () {
    window.simplyModalInterop = {

        showModal: function (element, dotNetRef) {

            var modal = new Modal(element);
            modal.show();

            const inputElements = element.getElementsByTagName('input');

            if (inputElements.length > 0) {
                inputElements.item(0).focus();
            }

            element.addEventListener('hidden.bs.modal', function (event) {
                // do something when this event triggers
                // event.target is the modal referenced in myModal
                // event.relatedTarget is the button referenced with myModalTriggerButton
                dotNetRef.invokeMethodAsync('OnModalVisibilityChange',false);

            }, false);

            element.addEventListener('shown.bs.modal', function (event) {
                // do something when this event triggers
                // event.target is the modal referenced in myModal
                // event.relatedTarget is the button referenced with myModalTriggerButton
                dotNetRef.invokeMethodAsync('OnModalVisibilityChange', true);

            }, false);


        },

        hideModal: function (element) {

            var modal = new Modal(element);
            modal.hide();

        }
    }

})();