using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public class ApiService
    {
        private readonly ApiJwtStore apiJwtStore;

        public ApiService(HttpClient httpClient, ApiJwtStore apiJwtStore)
        {
            HttpClient = httpClient;
            this.apiJwtStore = apiJwtStore;
        }

        public HttpClient HttpClient { get; }

        async public Task<HttpResponseMessage> PostAsync(string url, object payload)
        {
            var jwt = await apiJwtStore.GetJwt(); //authenticationStateProvider.GenerateJwt(componentOptions.ApiTokenKey, componentOptions.ApiTokenIssuer, componentOptions.ApiTokenAudience);

            if (jwt != null)

                HttpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", jwt);

            var payloadStr = new StringContent(JsonConvert.SerializeObject(payload), Encoding.UTF8, "application/json");
            return await HttpClient.PostAsync(url, payloadStr);
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
                    response = await httpResponseMessage.Content.ReadAsAsync<TResponse>();

                return new ApiResult<TResponse>
                {
                    StatusCode = (int)httpResponseMessage.StatusCode,
                    Success = true,
                    Response = response
                };
            }
            else if ((int)httpResponseMessage.StatusCode >= 400 && (int)httpResponseMessage.StatusCode < 500)
            {


                return new ApiResult<TResponse>
                {
                    StatusCode = (int)httpResponseMessage.StatusCode,
                };
            }
            else //((int)httpResponseMessage.StatusCode >= 500)
            {

                return new ApiResult<TResponse>
                {
                    StatusCode = (int)httpResponseMessage.StatusCode,
                };
            }
        }

    }
}
