using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    internal class InvalidFieldNotification : INotification
    {
        public string Message { get; set; }
    }
}
