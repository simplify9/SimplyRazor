using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public static class IJSRuntimeExtensions
    {
        async public static Task DownloadFile(this IJSRuntime jSRuntime, string url, string fileName, string target = null)
        {
            await jSRuntime.InvokeVoidAsync("iJSRuntimeExtensionsInterop.downloadFile", url, fileName, target);
        }
    }
}
