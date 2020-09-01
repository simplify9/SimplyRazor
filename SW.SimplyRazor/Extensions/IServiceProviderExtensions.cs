using Microsoft.Extensions.DependencyInjection;
using SW.PrimitiveTypes;
using System;

namespace SW.SimplyRazor
{
    public static class IServiceProviderExtensions
    {
        public static IBasicApiClient GetApiClient(this IServiceProvider serviceProvider, IBasicApiClient apiClient = null)
        {
            if (apiClient != null) return apiClient;

            var componentOptions = serviceProvider.GetRequiredService<ComponentOptions>();
            apiClient = componentOptions.DefaultApiClientFactory.Invoke(serviceProvider);
            if (apiClient == null) throw new SWException("Failed to get api client instance.");
            return apiClient;
        }
    }
}
