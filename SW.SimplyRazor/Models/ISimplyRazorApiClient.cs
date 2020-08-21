using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface ISimplyRazorApiClient
    {
        Task<ApiResult<SearchyResponse<TModel>>> Search<TModel>(string searchUrl);
        Task<ApiResult<IDictionary<string, string>>> Search(string searchUrl);
        Task<ApiResult<string>> Lookup(string searchUrl);
    }
}
