using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    public class FilterModel
    {
        public FilterModel(IFilterParams filterParams)
        {
            Params = filterParams;
        }

        public IFilterParams Params { get; set; }
        public int Operator { get; set; }
        public string ValueString { get; set; }

        public int? ValueInt { get; set; }

        public decimal? ValueDecimal { get; set; }

        public DateTime? ValueDate { get; set; }


        //public string Value2 { get; set; }


    }
}
