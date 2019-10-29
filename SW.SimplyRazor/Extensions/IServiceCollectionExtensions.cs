﻿

using Microsoft.Extensions.DependencyInjection;
using SW.ModelApi;

namespace SW.SimplyRazor
{
    public static class IServiceCollectionExtensions
    {
        public static IServiceCollection AddSimplyRazorServices(this IServiceCollection serviceCollection)
        {
            //serviceCollection.AddSingleton<LookupService>(); 
            serviceCollection.AddSingleton<Notifier<Ping>>();
            serviceCollection.AddSingleton<Notifier<DatalistReady>>();
            serviceCollection.AddSingleton<Notifier<PageIndexRequested>>();
            serviceCollection.AddSingleton<Notifier<UserMessage>>();

            return serviceCollection.AddScoped<NotifyService>();  

        }

        //public static void AddMapiClient<TModel>(this IServiceCollection serviceCollection, string name)
        //{
        //    serviceCollection.AddHttpClient<MapiClient<TModel>>();
            

        //}

    }
}
