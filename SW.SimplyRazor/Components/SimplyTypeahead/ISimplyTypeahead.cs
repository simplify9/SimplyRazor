using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface ISimplyTypeahead
    {
        Task SetSelectedItem(KeyValuePair<JsonElement, string> keyValue); 
    }
}
