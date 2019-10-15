using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface IFilterParams
    {
         SimplyFilterType Type { get; set; }


         string DisplayName { get; set; }

         string FieldName { get; set; }
    }
}
