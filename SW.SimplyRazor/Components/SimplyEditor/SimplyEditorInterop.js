(function () {
    window.simplyEditorInterop = {

        setEditorContent: function (element, html) {
            window[`${element}`].root.innerHTML = html;
        },

        initEditor: function (element, dotNetRef) {
            var quill = new Quill(`#${element}`,
                {
                    theme: 'snow',
                    modules: {
                        toolbar: '#toolbar'
                    }
                });

            var quillHtml = quill.root.innerHTML;

            quill.on('text-change', function (delta, oldDelta, source) {

                //console.log("text-change before");
                //dotNetObjRef.invokeMethodAsync('textChange', source);
                //console.log("text-change after");

            });

            quill.on('selection-change', function (range, oldRange, source) {


                if (range == null && quillHtml != quill.root.innerHTML) {
                    console.log("editorValueChanged");
                    quillHtml = quill.root.innerHTML;
                    dotNetRef.invokeMethodAsync('EditorValueChanged', quill.root.innerHTML);
                }
                //console.log("text-change after");

            });

            window[`${element}`] = quill;
        }
    };

})();
