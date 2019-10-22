using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public class NotifyService
    {
        private readonly IServiceProvider sp;

        public NotifyService(IServiceProvider sp)
        {
            this.sp = sp;
        }

        public Task Publish<TNotification>(TNotification notificationg)
        {
            return Publish<TNotification>(notificationg, null);
        }

        public async Task Publish<TNotification>(TNotification notification, params string[] tags)
        {
            var ns = sp.GetService<Notifier<TNotification>>();
            await ns.Publish(notification, tags);
        }

        public void Subscribe<TNotification>(Func<TNotification, string[], Task> func)
        {
            var ns = sp.GetService<Notifier<TNotification>>();
            ns.Notify += func;
        }

        public void Unsubscribe<TNotification>(Func<TNotification, string[], Task> func)
        {
            var ns = sp.GetService<Notifier<TNotification>>();
            ns.Notify -= func;
        }
    }



    internal class Notifier<TNotification> 
    {
        public event Func<TNotification, string[], Task> Notify;

        async public Task Publish(TNotification notification, string[] tags)
        {
            if (Notify != null)
            {
                if (tags == null) tags = new string[] { };
                 await Notify.Invoke(notification, tags);
            }
        }
    }


}
