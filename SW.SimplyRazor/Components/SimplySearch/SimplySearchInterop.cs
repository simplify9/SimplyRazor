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
            var newCols = columns.Select(e => new { Field = $"{e.Field.Substring(0,1).ToLower()}{e.Field.Substring(1, e.Field.Length - 1)}", Title = e.Field });
            await runtime.InvokeVoidAsync("simplySearchInterop.init", element, id, DotNetObjectReference.Create(this), newCols, url);
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

        [JSInvokable]
        async public Task RowClick(object data)
        {
            await search.RowClick(data);
            //await notify.Publish(new UserMessage { Level = AttentionLevel.Error, Body = "Errors encountered." });
        }





    }
}
