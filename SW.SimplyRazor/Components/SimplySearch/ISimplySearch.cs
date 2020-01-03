using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface ISimplySearch
    {

        int PageSize { get; set; }
        string Index { get; set; }
        string Height { get; set; }


        void AddColumn(ISimplyColumn column);
        void RemoveColumn(ISimplyColumn column);
        Task AddFilterSetup(ISearchyFilterSetup filter);
        void RemoveFilterSetup(ISearchyFilterSetup filter);
        Task RowClick(object data);
    }
}
