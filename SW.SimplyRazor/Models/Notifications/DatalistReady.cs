using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    public class DatalistReady : INotification
    {
        public object Datalist { get; set; }

        public int Count { get; set; }

        public int TotalCount { get; set; }

        public int PageIndex { get; set; }

        public int PageSize { get; set; }
    }
}
