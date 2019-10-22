using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    public class DatalistReady : INotification
    {
        public object Data { get; set; }
    }
}
