using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    public interface ISimplySearch
    {
        void AddColumn(ISimplyColumn column);
        void RemoveColumn(ISimplyColumn column);

        void AddFilterConfig(ISearchyFilterConfig filter);
        void RemoveFilterConfig(ISearchyFilterConfig filter);
    }
}
