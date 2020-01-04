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
        public static Task<HttpResponseMessage> PostAsAsync(this HttpClient client, object payload, string url)
        {
            var payloadStr = new StringContent(JsonConvert.SerializeObject(payload), Encoding.UTF8, "application/json");
            return client.PostAsync(url, payloadStr);
        }
    }
}
