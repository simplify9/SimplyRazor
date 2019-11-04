using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
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
        private readonly string id;

        public SimplySearchInterop(ISimplySearch search, IJSRuntime runtime)
        {
            this.search = search;
            this.runtime = runtime;
            id = $"tabulator_{Guid.NewGuid().ToString("N")}";
        }

        async public Task Initialize(ElementReference element, IEnumerable<ISimplyColumn> columns)
        {
            //var newCols = columns.Select(e => new { e.Field, e.Title  });


            await runtime.InvokeVoidAsync("simplySearchInterop.init", element, id, columns);

        }


    }
}
