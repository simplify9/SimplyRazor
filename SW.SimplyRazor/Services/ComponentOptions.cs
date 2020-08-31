using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace SW.SimplyRazor
{
    public class ComponentOptions
    {
        public Uri BlobsUri { get; set; }
        public Func<IServiceProvider, IBasicApiClient> DefaultApiClientFactory { get; set; }
    }
}
