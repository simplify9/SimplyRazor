

using Microsoft.Extensions.DependencyInjection;


namespace SW.SimplyRazor
{
    public static class IServiceCollectionExtensions
    {
        public static IServiceCollection AddSimplyRazorServices(this IServiceCollection serviceCollection)
        {

            serviceCollection.AddSingleton<Notifier<Ping>>();
            serviceCollection.AddSingleton<Notifier<DatalistReady>>();

            return serviceCollection.AddSingleton<NotifyService>();  

        }
    }
}
