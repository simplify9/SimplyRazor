using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    public class SimplySearchFilterSetup : ISearchyFilterSetup
    {
        public string Type { get; set; }
        public string Text { get; set; }
        public string Field { get; set; }
        public bool Required { get; set; }
        public bool Default { get; set; }
        public ICollection<SearchyRule> Rules { get; set; }
        public string Lookup { get; set; }
        public int? TypeAhead { get; set; }
    }
}
