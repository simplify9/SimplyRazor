using SW.Searchy;
using System;
using System.Collections.Generic;

namespace SW.SimplyRazor
{
    public class FilterState : ISearchyFilterConfig, ISearchyFilterTyped
    {
        public FilterState(ISearchyFilterConfig isfc)
        {
            
            Type = isfc.Type;
            Text = isfc.Text;
            Field = isfc.Field;
            Required  = isfc.Required ;
            Default = isfc.Default;
            Rules = isfc.Rules;
        }

        public object Value { get; set; }
        public SearchyRule Rule { get => (SearchyRule)Operator; set => Operator = (int)value; }
        public string Type { get; set; }
        public string Text { get; set; }
        public string Field { get; set; }
        public ICollection<SearchyRule> Rules { get; set; }
        public bool Required { get; set; }
        public bool Default { get; set; }
        public int Operator { get; set; }
        public bool? ValueBool { get; set; }
        public byte? ValueByte { get; set; }
        public int? ValueInt { get; set; }
        public long? ValueLong { get; set; }
        public decimal? ValueDecimal { get; set; }
        public string ValueString { get; set; }
        public DateTime? ValueDate { get; set; }
        public byte[] ValueByteArray { get; set; }
        public int[] ValueIntArray { get; set; }
        public long[] ValueLongArray { get; set; }
        public string[] ValueStringArray { get; set; }

        //public string Value2 { get; set; }
    }
}
