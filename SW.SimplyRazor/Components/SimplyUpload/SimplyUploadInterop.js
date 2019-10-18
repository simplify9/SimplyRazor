(function () {
    window.simplyUploadInterop = {

        saveFile: function (element) {
            //var id = { name: 'john', age: 34 };
            var formData = new FormData();
            var file = element.files[0];
            //Promise.all(files.map(f => fetch('/upload', { method: "POST", body: formData })));
            formData.append("File", file);
            //formData.append("Id", "123456");


            //formData.append("user", JSON.stringify(user));

            //try {

            return fetch('api/upload', { method: "POST", body: formData })
                .then(response => response.text());
                //.then((body) => console.log(body));
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
