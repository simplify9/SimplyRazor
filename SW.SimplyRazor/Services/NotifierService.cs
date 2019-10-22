using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor.Services
{
    public class NotifierService
    {
        // Can be called from anywhere
        public async Task Update(string key, int value)
        {
            if (Notify != null)
            {
                await Notify.Invoke(key, value);
            }
        }

        public event Func<string, int, Task> Notify;
    }
}
