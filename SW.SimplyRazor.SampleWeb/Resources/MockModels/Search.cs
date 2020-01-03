using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor.SampleWeb.Resources.MockModels
{
    public class Search : ISearchyHandler
    {
        async public Task<object> Handle(SearchyRequest searchyRequest, bool lookup = false, string searchPhrase = null)
        {
            IDictionary<string, string> result = new Dictionary<string, string>()
            {
                { "1","Text1" },
                { "2", "Text2" },
                { "3","Text3" },
                { "4","Text4" },
                { "5","Text5" },

            };

            return result;
        }
    }
}
