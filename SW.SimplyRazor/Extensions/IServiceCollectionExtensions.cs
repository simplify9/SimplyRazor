using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.Extensions.DependencyInjection;
using System;


namespace SW.SimplyRazor
{
    public static class IServiceCollectionExtensions
    {



        public static IServiceCollection AddSimplyRazor(this IServiceCollection serviceCollection)
        {
            var componentOptions = new ComponentOptions();
            serviceCollection.AddSingleton(componentOptions);

            serviceCollection.AddHttpClient<ApiService>();

            return serviceCollection.addSimplyRazor();
        }

        public static IServiceCollection AddSimplyRazor(this IServiceCollection serviceCollection, Action<ComponentOptions> configure)
        {
            var componentOptions = new ComponentOptions();
            configure.Invoke(componentOptions);
            serviceCollection.AddSingleton(componentOptions);

            serviceCollection.AddHttpClient<ApiService>((serviceProvider, httpClient) => 
            {
                httpClient.BaseAddress = componentOptions.ApiBaseUri;
            });

            return serviceCollection.addSimplyRazor();
        }

        static IServiceCollection addSimplyRazor(this IServiceCollection serviceCollection)
        {
            

            serviceCollection.AddSingleton<Notifier<Ping>>();
            serviceCollection.AddSingleton<Notifier<UserMessage>>();
            serviceCollection.AddSingleton<Notifier<InvalidFieldNotification>>();

            return serviceCollection.AddScoped<NotifyService>();
        }


    }
}
