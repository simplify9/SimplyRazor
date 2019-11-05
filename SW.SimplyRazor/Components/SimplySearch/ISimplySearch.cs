using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks; 

namespace SW.SimplyRazor
{
    public interface ISimplySearch
    {
        void AddColumn(ISimplyColumn column);
        void RemoveColumn(ISimplyColumn column);
        void AddFilterSetup(ISearchyFilterSetup filter);
        void RemoveFilterSetup(ISearchyFilterSetup filter);
        Task RowClick(object data);
    }
}
