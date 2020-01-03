using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor.SampleWeb.Resources.Employees
{

    [HandlerName("filters")]
    public class Filters : IQueryHandler
    {
        async public Task<object> Handle()
        {
            IEnumerable<ISearchyFilterSetup> result = new List<ISearchyFilterSetup>
            {
                new SearchyFilterSetup
                {
                    Field = "Id",
                    Text = "Id",
                    Type = SearchyDataType.Number,
                    Rules=SearchyDataType.RulesFor(SearchyDataType.Number)
                },
                new SearchyFilterSetup
                {
                    Field = "FirstName",
                    Text = "First Name",
                    Type = SearchyDataType.Text,
                    Required = true,
                    Rules=SearchyDataType.RulesFor(SearchyDataType.Text)
                },
                new SearchyFilterSetup
                {
                    Field = "LastName",
                    Text = "Last Name",
                    Type = SearchyDataType.Text ,
                    Rules=SearchyDataType.RulesFor(SearchyDataType.Text)
                },
            };

            return result;
        }
    }
}
