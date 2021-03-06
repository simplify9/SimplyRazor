﻿using Microsoft.Extensions.DependencyInjection;
using System;

namespace SW.SimplyRazor
{
    public static class IServiceCollectionExtensions
    {
        public static IServiceCollection AddSimplyRazor(this IServiceCollection serviceCollection, Action<ComponentOptions> configure = null)
        {
            var componentOptions = new ComponentOptions();
            if (configure != null) configure.Invoke(componentOptions);
            serviceCollection.AddSingleton(componentOptions);

            serviceCollection.AddHttpClient<ApiService>((serviceProvider, httpClient) =>
            {
                httpClient.BaseAddress = componentOptions.ApiBaseUri;
            });

            serviceCollection.AddScoped<JwtStore>();

            serviceCollection.AddScoped<Notifier<UserMessage>>();
            serviceCollection.AddScoped<Notifier<InvalidFieldNotification>>();
            return serviceCollection.AddScoped<NotifyService>();
        }
    }
}
