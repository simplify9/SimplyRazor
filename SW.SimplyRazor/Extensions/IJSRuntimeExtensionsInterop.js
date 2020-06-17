(function () {

    window.iJSRuntimeExtensionsInterop = {

        downloadFile: function (href, fileName, target) {

            var link = document.createElement('a');
            link.download = fileName;
            link.href = href;
            if (target != null) link.target = target;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            return; 
        }

    };

})();
