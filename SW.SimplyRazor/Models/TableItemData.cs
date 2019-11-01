using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{

    public  class TableItemData
    {
        readonly List<Dictionary<string, string>> itemLookups;

        public TableItemData(int itemCount)
        {
            itemLookups = new List<Dictionary<string, string>>();
            for (var i = 0; i < itemCount; i++)
                itemLookups.Add(new Dictionary<string, string>());
        }

        public void SetLookupValue(int index, string fieldName, string value)
        {
            itemLookups[index][fieldName] = value;
        }

        public string GetLookupValue(int index, string fieldName)
        {
            itemLookups[index].TryGetValue(fieldName, out string value);
            return value;
        }
    }
}
