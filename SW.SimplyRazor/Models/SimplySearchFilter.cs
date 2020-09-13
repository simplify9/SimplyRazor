using SW.PrimitiveTypes;
using System;
using System.Linq;

namespace SW.SimplyRazor
{
    public class SimplySearchFilter : ISearchyFilterTyped
    {
        public SimplySearchFilter() 
        { 
        }

        public SimplySearchFilter(ISearchyFilter searchyFilter)
        {
            Field = searchyFilter.Field;
            Rule = searchyFilter.Rule;
            Value = searchyFilter.Value;
        }

        public string Field { get; set; }

        public object Value { get; set; }


        public SearchyRule Rule { get; set; }

        public string ValueString
        {
            get
            {
                return (string)Value;
            }
            set
            {
                Value = value;
            }
        }

        public string[] ValueStringArray
        {
            get
            {
                return (string[])Value;
            }
            set
            {
                Value = value;
            }
        }

        public decimal? ValueDecimal
        {
            get
            {
                return (decimal?)Value.ConvertValueToType(typeof(decimal?));
            }
            set
            {
                Value = value;
            }
        }
        public decimal[] ValueDecimalArray
        {
            get
            {
                return (decimal[])Value;
            }
            set
            {
                Value = value;
            }
        }

        public DateTime? ValueDateTime
        {
            get
            {
                return (DateTime?)Value;
            }
            set
            {
                Value = value;
            }
        }
        public DateTime[] ValueDateTimeArray
        {
            get
            {
                return (DateTime[])Value;
            }
            set
            {
                Value = value;
            }
        }

        public SimplySearchFilterSetup Setup { get; set; }

    }
}
