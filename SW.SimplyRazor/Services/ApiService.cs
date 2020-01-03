using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{ 
    internal class ApiService
    {

        public ApiService(HttpClient httpClient)
        {
            HttpClient = httpClient;
        }

        public HttpClient HttpClient { get; }

        async public Task<IEnumerable<ISearchyFilterSetup>> GetFilterSetup()
        {
            var response = await HttpClient.GetAsync("filters");
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsAsync<IEnumerable<SearchyFilterSetup>>();
        }

        async public Task<IDictionary<string, string>> LookupList(string searchPhrase = "", SearchyRequest searchyRequest = null)
        {
            var response = await HttpClient.GetAsync($"?lookup=true&search={Uri.EscapeDataString(searchPhrase)}&{searchyRequest?.ToString()}");
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsAsync<Dictionary<string, string>>();
        }

        async public Task<string> LookupValue(object key)
        {
            var response = await HttpClient.GetAsync(key.ToString());
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsStringAsync();
        }
    }
}
