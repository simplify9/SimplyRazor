using SW.Searchy;
using System;

namespace SW.SimplyRazor
{
    public class FilterState : ISearchyFilterConfig, ISearchyFilterTyped
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
                    case SearchyFilterConfigType.String: return ValueString;
                    case SearchyFilterConfigType.Int: return ValueInt;
                    case SearchyFilterConfigType.Decimal: return ValueDecimal;
                    case SearchyFilterConfigType.Date: return ValueDate;
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
