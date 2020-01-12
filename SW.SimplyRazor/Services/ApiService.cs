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

        //async public Task<IDictionary<string, string>> LookupList(string searchPhrase = "", SearchyRequest searchyRequest = null)
        //{
        //    var response = await HttpClient.GetAsync($"?lookup=true&search={Uri.EscapeDataString(searchPhrase)}&{searchyRequest?.ToString()}");
        //    response.EnsureSuccessStatusCode();
        //    return await response.Content.ReadAsAsync<Dictionary<string, string>>();
        //}

        //async public Task<string> LookupValue(object key)
        //{
        //    var response = await HttpClient.GetAsync(key.ToString());
        //    response.EnsureSuccessStatusCode();
        //    return await response.Content.ReadAsStringAsync();
        //}

        //async public Task<HttpResponseMessage> Post(object key = null, object request = null)
        //{
        //    if (key != null && request != null)
        //    {
        //        return await HttpClient.PostAsync(key.ToString(), request);
        //    }
        //    if (request != null)
        //    {
        //        return await HttpClient.PostAsync(string.Empty, request);
        //    }
        //    //return await HttpClient.PostAsync(request, string.Empty);
        //    return null;
        //}

        //async public Task<HttpResponseMessage> Get(string Url = null)
        //{
        //    //if (key != null && request != null)
        //    //{
        //    //    return await HttpClient.GetAsync(key.ToString());
        //    //}
        //    //if (request == null)
        //    //{
        //    return await HttpClient.GetAsync(Url.ToString());
        //    //}
        //    //if (key == null)
        //    //{
        //    //    return await HttpClient.GetAsync(string.Empty);
        //    //}

        //    //return null;
        //}

    }
}
