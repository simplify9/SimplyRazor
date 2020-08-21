using Newtonsoft.Json;
using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;

namespace SW.SimplyRazor
{
    public class SimplySearchValue
    {
        public SimplySearchValue()
        {
            Filters = new List<FilterModel>();
        }

        public SimplySearchValue(string base64Value) : this() 
        {
            
            if (base64Value == null) return;

            var bytes = Convert.FromBase64String(base64Value);
            var value = JsonConvert.DeserializeObject<SimplySearchValue>(Encoding.UTF8.GetString(bytes));
            Filters = value.Filters;
            Page = value.Page;
        }

        public ICollection<FilterModel> Filters { get; set; } 

        public int Page { get; set; }

        public SearchyRequest ToSearchyRequest(int pageSize)
        {
            return new SearchyRequest(new SearchyCondition(GetFilledFilters()))
            {
                PageSize = pageSize,
                PageIndex = Page
            };
        }

        public override string ToString()
        {
            return ToSearchyRequest(20).ToString() ;
        }

        IEnumerable<FilterModel> GetFilledFilters()
        {
            return Filters.Where(filter =>
                (filter.ValueDateTime != null ||
                filter.ValueDateTimeArray != null ||
                filter.ValueDecimal != null ||
                filter.ValueDecimalArray != null ||
                filter.ValueString != null ||
                filter.ValueStringArray != null) &&
                !string.IsNullOrEmpty(filter.Field) &&
                filter.Rule != default);
        }
    }
}
