using Microsoft.Extensions.DependencyInjection;

namespace SW.SimplyRazor
{
    public static class IServiceCollectionExtensions
    {
        public static IServiceCollection AddSimplyRazor(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<Notifier<Ping>>();
            serviceCollection.AddSingleton<Notifier<UserMessage>>();

            serviceCollection.AddHttpClient<ApiService>();

            return serviceCollection.AddScoped<NotifyService>();  
        }
    }
}
