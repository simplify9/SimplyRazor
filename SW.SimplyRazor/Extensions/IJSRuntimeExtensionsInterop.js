(function () {

    window.iJSRuntimeExtensionsInterop = {

        downloadFile: function (href, fileName) {

            var link = document.createElement('a');
            link.download = fileName;
            link.href = href
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            return; 
        }

    };

})();
