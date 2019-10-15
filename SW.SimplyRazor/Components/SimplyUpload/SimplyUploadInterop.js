(function () {
    window.simplyUploadInterop = {

        saveFile: function (element) {
            //let user = { name: 'john', age: 34 };
            var formData = new FormData();
            var file = element.files[0];
            //Promise.all(files.map(f => fetch('/upload', { method: "POST", body: formData })));
            formData.append("file", file);
            //formData.append("user", JSON.stringify(user));

            //try {

            return fetch('/upload', {method: "POST", body: formData })
                .then(response => console.log('HTTP response code:', response.status));
            //}
            //catch (e) {
            //    console.log('Huston we have problem...:', e);
            //}

        },

        initBsCustomFileInput: function () {
            bsCustomFileInput.init();
        }

    };

})();
