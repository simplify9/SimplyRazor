using Newtonsoft.Json;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public class ApiService
    {
        private readonly ApiJwtStore apiJwtStore;
        private readonly HttpClient httpClient;

        public ApiService(HttpClient httpClient, ApiJwtStore apiJwtStore)
        {
            this.httpClient = httpClient;
            this.apiJwtStore = apiJwtStore;
        }

        async public Task<ApiResult> DeleteAsync(string url)
        {
            await PopulateJwt();
            var httpResponseMessage = await httpClient.DeleteAsync(url);

            return new ApiResult
            {
                StatusCode = (int)httpResponseMessage.StatusCode,
                Success = (int)httpResponseMessage.StatusCode >= 200 && (int)httpResponseMessage.StatusCode < 300
            };
        }

        async public Task<ApiResult<TResponse>> PostAsync<TResponse>(string url, object payload)
        {
            var httpResponseMessage = await PostAsync(url, payload);

            if ((int)httpResponseMessage.StatusCode >= 200 && (int)httpResponseMessage.StatusCode < 300)
            {

                TResponse response;
                if (typeof(TResponse) == typeof(string))

                    response = (TResponse)(object)(await httpResponseMessage.Content.ReadAsStringAsync());

                else if (typeof(TResponse) == typeof(NoT))

                    response = default;

                else
                    response = await ReadAsAsync<TResponse>(httpResponseMessage.Content);

                return new ApiResult<TResponse>
                {
                    StatusCode = (int)httpResponseMessage.StatusCode,
                    Success = true,
                    Response = response
                };
            }
            else if ((int)httpResponseMessage.StatusCode >= 400 && (int)httpResponseMessage.StatusCode < 500)

                return new ApiResult<TResponse>
                {
                    StatusCode = (int)httpResponseMessage.StatusCode,
                };

            else //((int)httpResponseMessage.StatusCode >= 500)

                return new ApiResult<TResponse>
                {
                    StatusCode = (int)httpResponseMessage.StatusCode,
                };
        }

        async public Task<ApiResult<TResponse>> GetAsync<TResponse>(string url)
        {
            await PopulateJwt();

            var httpResponseMessage = await httpClient.GetAsync(url);

            if ((int)httpResponseMessage.StatusCode >= 200 && (int)httpResponseMessage.StatusCode < 300)
            {
                TResponse response;
                if (typeof(TResponse) == typeof(string))

                    response = (TResponse)(object)(await httpResponseMessage.Content.ReadAsStringAsync());

                else
                    response = await ReadAsAsync<TResponse>(httpResponseMessage.Content);

                return new ApiResult<TResponse>
                {
                    Response = response,
                    Success = true,
                    StatusCode = (int)httpResponseMessage.StatusCode
                };
            }
            else if ((int)httpResponseMessage.StatusCode >= 400 && (int)httpResponseMessage.StatusCode < 500)
            {

                //var messages = await result.Content.ReadAsAsync<Dictionary<string, IEnumerable<string>>>();

                //await notify.Publish(new UserMessage { Body = "error", Level = AttentionLevel.Warning });
                return new ApiResult<TResponse>
                {
                    Success = false,
                    StatusCode = (int)httpResponseMessage.StatusCode,
                    Body = await httpResponseMessage.Content.ReadAsStringAsync()
                };
            }
            else 
            {
                //await notify.Publish(new UserMessage { Body = "Server error.", Level = AlertLevel.Error });
                return new ApiResult<TResponse>
                {
                    Success = false,
                    StatusCode = (int)httpResponseMessage.StatusCode

                };
            }
        }

        async Task PopulateJwt()
        {
            var jwt = await apiJwtStore.GetJwt(); //authenticationStateProvider.GenerateJwt(componentOptions.ApiTokenKey, componentOptions.ApiTokenIssuer, componentOptions.ApiTokenAudience);

            if (jwt != null)

                httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", jwt);
        }

        async Task<HttpResponseMessage> PostAsync(string url, object payload)
        {
            await PopulateJwt();
            var payloadStr = new StringContent(JsonConvert.SerializeObject(payload), Encoding.UTF8, "application/json");
            return await httpClient.PostAsync(url, payloadStr);
        }

        async Task<T> ReadAsAsync<T>(HttpContent httpContent)
        {
            var resutlStr = await httpContent.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(resutlStr);
        }

    }
}
