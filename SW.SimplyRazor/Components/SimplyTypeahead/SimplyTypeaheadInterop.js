(function () {
    window.simplyTypeaheadInterop = {

        initAutocompleteJs: function (element, dotNetObjRef) {

            new autoComplete({
                data: {                              // Data src [Array, Function, Async] | (REQUIRED)
                    src: () => fetch(`/api/lookup/country?s=${element.value}`).then(response => response.json()),
                    key: ["Value"],
                    cache: false
                },
                //query: {                               // Query Interceptor               | (Optional)
                //    manipulate: (query) => {
                //        return query.replace("pizza", "burger");
                //    }
                //},
                //sort: (a, b) => {                    // Sort rendered results ascendingly | (Optional)
                //    if (a.match < b.match) return -1;
                //    if (a.match > b.match) return 1;
                //    return 0;
                //},
                placeHolder: "",     // Place Holder text                 | (Optional)
                selector: () => element,           // Input field selector              | (Optional)
                threshold: 2,                        // Min. Chars length to start Engine | (Optional)
                debounce: 300,                       // Post duration for engine to start | (Optional)
                searchEngine: "strict",              // Search Engine type/mode           | (Optional)
                resultsList: {                       // Rendered results list object      | (Optional)
                    render: true,
                    container: source => {
                        //source.className = "list-group";
                        const resultsListID = "food_List";
                        return resultsListID;
                    },
                    destination: element,
                    position: "afterend",
                    element: "ul"
                },
                maxResults: 5,                         // Max. number of rendered results | (Optional)
                highlight: true,                       // Highlight matching results      | (Optional)
                resultItem: {                          // Rendered result item            | (Optional)
                    content: (data, source) => {
                        //source.className = "list-group-item";
                        source.innerHTML = data.match;
                        //element.value = data.match;
                    },
                    element: "li"
                },
                noResults: () => {                     // Action script on noResults      | (Optional)
                    const result = document.createElement("li");
                    result.setAttribute("class", "no_result");
                    result.setAttribute("tabindex", "1");
                    result.innerHTML = "No Results";
                    document.querySelector("#autoComplete_results_list").appendChild(result);
                },
                onSelection: feedback => {             // Action script onSelection event | (Optional)
                    console.log("selected");
                    //new { Key="", Value="" } //element.value = feedback.selection.value.Value;
                    dotNetObjRef.invokeMethodAsync('AutoCompleteSelected', feedback.selection.value);

                }
            });

        }

    };

})();
