using Microsoft.Extensions.DependencyInjection;
using System;

namespace SW.SimplyRazor
{
    public static class IServiceProviderExtensions
    {
        public static ISimplyRazorApiClient GetApiClient(this IServiceProvider serviceProvider, ISimplyRazorApiClient apiClient = null)
        {
            if (apiClient != null) return apiClient;

            var componentOptions = serviceProvider.GetRequiredService<ComponentOptions>();
            return componentOptions.DefaultApiClientFactory.Invoke(serviceProvider);
        }
    }
}
