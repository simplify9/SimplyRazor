using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public class ApiService
    {
        private readonly JwtStore apiJwtStore;
        private readonly HttpClient httpClient;

        public ApiService(HttpClient httpClient, JwtStore apiJwtStore)
        {
            this.httpClient = httpClient;
            this.apiJwtStore = apiJwtStore;
        }

        async public Task<ApiResult> DeleteAsync(string url)
        {
            try
            {
                await PopulateJwt();
                var httpResponseMessage = await httpClient.DeleteAsync(url);

                return new ApiResult
                {
                    StatusCode = (int)httpResponseMessage.StatusCode,
                    Success = (int)httpResponseMessage.StatusCode >= 200 && (int)httpResponseMessage.StatusCode < 300
                };

            }
            catch (Exception ex)
            {
                return new ApiResult
                {
                    StatusCode = 0,
                    Body = ex.Message
                };
            }
        }

        async public Task<ApiResult> PostAsync(string url, object payload)
        {
            var result = await PostAsync<NoT>(url, payload);

            return new ApiResult
            {
                Body = result.Body,
                StatusCode = result.StatusCode,
                Success = result.Success
            };
        }

        async public Task<ApiResult<TResponse>> PostAsync<TResponse>(string url, object payload)
        {

            try
            {
                await PopulateJwt();
                var httpResponseMessage = await httpClient.PostAsync(url, new StringContent(JsonConvert.SerializeObject(payload), Encoding.UTF8, "application/json"));

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

                else

                    return new ApiResult<TResponse>
                    {
                        StatusCode = (int)httpResponseMessage.StatusCode,
                        Body = await httpResponseMessage.Content.ReadAsStringAsync()
                    };
            }
            catch (Exception ex)
            {
                return new ApiResult<TResponse>
                {
                    StatusCode = 0,
                    Body = ex.Message
                };
            }

        }

        async public Task<ApiResult<TResponse>> GetAsync<TResponse>(string url)
        {

            try
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

                else
                {
                    return new ApiResult<TResponse>
                    {
                        StatusCode = (int)httpResponseMessage.StatusCode,
                        Body = await httpResponseMessage.Content.ReadAsStringAsync()
                    };
                }
            }
            catch (Exception ex)
            {
                return new ApiResult<TResponse>
                {
                    StatusCode = 0,
                    Body = ex.Message
                };
            }
        }

        async Task PopulateJwt()
        {
            var jwt = await apiJwtStore.GetJwt();

            if (jwt != null)

                httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", jwt);
        }

        async Task<T> ReadAsAsync<T>(HttpContent httpContent)
        {
            var resutlStr = await httpContent.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(resutlStr);
        }

    }
}
