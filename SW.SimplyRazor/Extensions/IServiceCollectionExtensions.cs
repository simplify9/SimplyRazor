

using Microsoft.Extensions.DependencyInjection;


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


            serviceCollection.AddHttpClient<ApiService>();

            return serviceCollection.AddScoped<NotifyService>();  



        }

        //public static void AddMapiClient<TModel>(this IServiceCollection serviceCollection, string name)
        //{
        //    serviceCollection.AddHttpClient<MapiClient<TModel>>();
            

        //}

    }
}
