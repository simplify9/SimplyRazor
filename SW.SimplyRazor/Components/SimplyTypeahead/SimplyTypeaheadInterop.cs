using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public class SimplyTypeaheadInterop 
    {
        readonly ISimplyTypeahead simplyTypeahead;
        public SimplyTypeaheadInterop(ISimplyTypeahead simplyTypeahead)
        {
            this.simplyTypeahead = simplyTypeahead;
        }

        async public Task InitAutoComplete(IJSRuntime JSRuntime, ElementReference element)
        {
            await JSRuntime.InvokeVoidAsync("simplyTypeaheadInterop.initAutocompleteJs", element, DotNetObjectReference.Create(this));
        }

        [JSInvokable]
        public async Task AutoCompleteSelected(KeyValuePair<JsonElement, string> selectedItem)
        {
            await simplyTypeahead.SetSelectedItem(selectedItem);
        }
    }
}
