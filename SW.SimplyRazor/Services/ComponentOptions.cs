using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace SW.SimplyRazor
{
    public class ComponentOptions
    {
        public Uri ApiBaseUri { get; set; }
        public Uri BlobsUri { get; set; }
        public string ApiTokenKey { get; set; }
        public string ApiTokenAudience { get; set; }
        public string ApiTokenIssuer { get; set; }
        public Func<IServiceProvider, HttpClient> DefaultHttpClientFactory { get; set; }
    }
}
