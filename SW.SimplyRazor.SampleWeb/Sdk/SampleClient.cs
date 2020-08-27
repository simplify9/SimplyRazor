using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net.Http;
using SW.PrimitiveTypes;
using SW.HttpExtensions;

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
