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

        void AddFilterConfig(ISearchyFilterSetup filter);
        void RemoveFilterConfig(ISearchyFilterSetup filter);
    }
}
