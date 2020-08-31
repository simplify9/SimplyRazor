using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net.Http;
using SW.PrimitiveTypes;
using SW.HttpExtensions;

namespace SW.SimplyRazor.SampleWeb
{
    public class SampleClient : ApiClientBase<SampleClientOptions>, IBasicApiClient
    {
        public SampleClient(HttpClient httpClient, RequestContext requestContext, SampleClientOptions options) : base(httpClient, requestContext, options)
        {
        }

        async public Task<ApiResult<string>> LookupValue(string searchUrl)
        {
            return await Builder.Path(searchUrl).AsApiResult<string>().GetAsync();
        }

        public Task<ApiResult<SearchyResponse<TModel>>> Search<TModel>(string searchUrl)
        {
            return Builder.Path(searchUrl).AsApiResult<SearchyResponse<TModel>>().GetAsync();
        }

        public Task<ApiResult<IDictionary<string, string>>> Search(string searchUrl)
        {
            return Builder.Path(searchUrl).AsApiResult<IDictionary<string, string>>().GetAsync();
        }

        public Task<ApiResult<TModel>> GetById<TModel>(string url, object id)
        {
            return Builder.Path($"{url}/{id}").AsApiResult<TModel>().GetAsync();
        }
    }
}
