using SW.Searchy;
using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    public class FilterState : ISearchyFilterConfig, ISearchyFilter
    {
        public FilterState(ISearchyFilterConfig isf)
        {
            Type = isf.Type;
            Text = isf.Text;
            Field = isf.Field;
        }

        public object Value
        {
            get
            { 
                switch (Type)
                {
                    case FilterDataType.String: return ValueString;
                    case FilterDataType.Int: return ValueInt;
                    case FilterDataType.Decimal: return ValueDecimal;
                    case FilterDataType.Date: return ValueDate;
                }
                return null;
            }
            set 
            {
                throw new NotImplementedException();
            }
        }
        public SearchyRule Rule { get => (SearchyRule)Operator; set => Operator = (int)value; }
        public string Type { get; set; }
        public string Text { get; set; }
        public string Field { get; set; }
        public int Operator { get; set; }
        public string ValueString { get; set; }
        public int? ValueInt { get; set; }
        public decimal? ValueDecimal { get; set; }
        public DateTime? ValueDate { get; set; }

        //public string Value2 { get; set; }
    }
}
