using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    internal static class HttpClientExtensions
    {
        public static Task<HttpResponseMessage> PostAsync<T>(this HttpClient client, T model, string url)
        {
            var modelStr = new StringContent(JsonConvert.SerializeObject(model), Encoding.UTF8, "application/json");
            return client.PostAsync(url, modelStr);
        }
    }
}
