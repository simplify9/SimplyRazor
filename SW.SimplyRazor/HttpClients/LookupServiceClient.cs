using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public class LookupServiceClient 
    {
        public HttpClient Client { get; }

        public LookupServiceClient(HttpClient client)
        {
            //client.BaseAddress = new Uri("https://localhost:5001");
            //// GitHub API versioning
            //client.DefaultRequestHeaders.Add("Accept",
            //    "application/vnd.github.v3+json");
            //// GitHub requires a user-agent
            //client.DefaultRequestHeaders.Add("User-Agent",
            //    "HttpClientFactory-Sample");

            Client = client;
        }

 

        public async Task<IEnumerable<KeyValuePair<object, string>>> Search(string lookupServiceName, string searchFor)
        {
            var response = await Client.GetAsync( $"api/lookup/{lookupServiceName}/?s={searchFor}");

            response.EnsureSuccessStatusCode();
            //var str = await response.Content.ReadAsStringAsync(); 
            var result = await response.Content.ReadAsAsync<IEnumerable<KeyValuePair<object, string>>>();

            return result;
        }

        public async Task<object> Get(string lookupServiceName, object key)
        {
            var response = await Client.GetAsync(
                 $"api/lookup/{lookupServiceName}?k={key}");

            response.EnsureSuccessStatusCode();

            var result = await response.Content.
                ReadAsStringAsync();

            return result;
        }

        public bool CanServe(string lookupServiceName)
        {
            throw new NotImplementedException();
        }
    }
}
