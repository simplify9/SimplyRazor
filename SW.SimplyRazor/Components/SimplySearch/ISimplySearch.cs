using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface ISimplySearch
    {
        Task AddFilterSetup(ISearchyFilterSetup filter);
        void RemoveFilterSetup(ISearchyFilterSetup filter);
        //Task RowClick(string index);
    }
}
