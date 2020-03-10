(function () {
    window.simplyUploadInterop = {

        saveFile: function (element, url, sizeLimit) {

            //var id = { name: 'john', age: 34 };
            var formData = new FormData();
            var file = element.files[0];

            if (sizeLimit > 0 && file.size > sizeLimit) {
                return {
                    body: `File size limit exceeded ${sizeLimit}.`,
                    statusCode: 0,
                    success: false
                }
            }

            formData.append("File", file);
            //formData.append("Id", "123456");
            //formData.append("user", JSON.stringify(user));

            return fetch(url, { method: "POST", body: formData })
                .then(response =>
                    response.status < 300
                        ? response.json().then(json => ({
                            response: json,
                            statusCode: response.status,
                            success: true
                        }))
                        : response.text().then(text => ({
                            body: text,
                            statusCode: response.status,
                            success: false
                        })));

        },

        init: function () {
            bsCustomFileInput.init();
        }

    };

})();
