using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using SW.ModelApi;

namespace SW.SimplyRazor
{
    public static class IServiceProviderExtensions
    {
        public static dynamic  GetService(this IServiceProvider serviceProvider, string modelName)
        {
            var modelMapping = serviceProvider.GetServices<IModelMapping>().Where(s => s.Name.ToLower()== modelName).First();
            var type = typeof(MapiClient<>).MakeGenericType(modelMapping.Type);
            var svc = serviceProvider.GetRequiredService(type);
            return svc;
        }
    }
}
