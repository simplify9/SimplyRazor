using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SW.SimplyRazor
{
    class SearchState
    {
        public SearchState()
        {
            Filters = new List<SimplySearchFilter>();
            FilterSetups = new Dictionary<string, SimplySearchFilterSetup>(StringComparer.OrdinalIgnoreCase);
        }

        public ICollection<SimplySearchFilter> Filters { get; set; }
        public IDictionary<string, SimplySearchFilterSetup> FilterSetups { get; set; }
    }
}
