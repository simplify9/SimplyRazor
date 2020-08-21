using SW.HttpExtensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SW.EfCoreExtensions;
using System.Net.Http;
using SW.PrimitiveTypes;

namespace SW.SimplyRazor.SampleWeb
{
    public class SampleClient : ApiClientBase<SampleClientOptions>, ISimplyRazorApiClient
    {
        public SampleClient(HttpClient httpClient, RequestContext requestContext, SampleClientOptions options) : base(httpClient, requestContext, options)
        {
        }

        async public Task<ApiResult<string>> Lookup(string searchUrl)
        {
            return await Builder.Path(searchUrl).AsApiResult<string>().GetAsync();
        }

        async public Task<ApiResult<SearchyResponse<TModel>>> Search<TModel>(string searchUrl)
        {
            return await Builder.Path(searchUrl).AsApiResult<SearchyResponse<TModel>>().GetAsync();
        }

        async public Task<ApiResult<IDictionary<string, string>>> Search(string searchUrl)
        {
            return await Builder.Path(searchUrl).AsApiResult<IDictionary<string, string>>().GetAsync();
        }

        async public Task<ApiResult<TModel>> GetById<TModel>(string url, object id)
        {
            return await Builder.Path($"{url}/{id}").AsApiResult<TModel>().GetAsync();
        }
    }
}
