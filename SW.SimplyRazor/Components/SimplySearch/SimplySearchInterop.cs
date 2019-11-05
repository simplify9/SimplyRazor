using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public class SimplySearchInterop
    {
        private readonly ISimplySearch search;
        private readonly IJSRuntime runtime;
        private readonly NotifyService notify;
        private readonly string url;
        private readonly string id;

        public SimplySearchInterop(ISimplySearch search, IJSRuntime runtime, NotifyService notify, string url)
        {
            this.search = search;
            this.runtime = runtime;
            this.notify = notify;
            this.url = url;
            id = $"tabulator_{Guid.NewGuid().ToString("N")}";
        }

        async public Task Initialize(ElementReference element, IEnumerable<ISimplyColumn> columns)
        {
            //var newCols = columns.Select(e => new { e.Field, e.Title  });
            await runtime.InvokeVoidAsync("simplySearchInterop.init", element, id, DotNetObjectReference.Create(this), columns, url);
        }

        async public Task SetFilter(IEnumerable<ISearchyFilterTyped> filters)
        {
            var filtersQueryString = string.Join("&", filters.Select(f => new SearchyFilter(f).ToString()).ToArray()); ; 
            await runtime.InvokeVoidAsync("simplySearchInterop.setFilter", id, filtersQueryString, url);
        }

        [JSInvokable]
        async public Task ReportError(object error)
        {
            await notify.Publish(new UserMessage { Level = AttentionLevel.Error, Body = "Errors encountered." });
        }







    }
}
