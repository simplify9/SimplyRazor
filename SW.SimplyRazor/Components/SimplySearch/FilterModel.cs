using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    public class FilterModel : ISearchyFilterSetup, ISearchyFilterTyped
    {
        public FilterModel(ISearchyFilterSetup isfc)
        {
            Type = isfc.Type;
            Text = isfc.Text;
            Field = isfc.Field;
            Required = isfc.Required;
            Default = isfc.Default;
            Rules = isfc.Rules;
        }

        public object Value { get; set; }
        public SearchyRule Rule { get; set; }
        public string Type { get; set; }
        public string Text { get; set; }
        public string Field { get; set; }
        public ICollection<SearchyRule> Rules { get; set; }
        public bool Required { get; set; }
        public bool Default { get; set; }
        public decimal? ValueDecimal { get; set; }
        public string ValueString { get; set; }
        public DateTime? ValueDateTime { get; set; }
        public decimal[] ValueDecimalArray { get; set; }
        public string[] ValueStringArray { get; set; }
        public DateTime[] ValueDateTimeArray { get; set; }

    }

}
