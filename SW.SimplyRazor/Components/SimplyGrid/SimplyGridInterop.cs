using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public class SimplyGridInterop
    {
        private readonly ISimplyGrid Grid;
        private readonly IJSRuntime runtime;

        public SimplyGridInterop(ISimplyGrid grid, IJSRuntime runtime)
        {
            Grid = grid;
            this.runtime = runtime;
        }

        async public Task Initialize(ElementReference element, IEnumerable<ISimplyColumn> columns)
        {
            await runtime.InvokeVoidAsync("simplyGridInterop.init", element, columns);

        }


    }
}
