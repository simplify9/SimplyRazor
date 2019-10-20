using SW.Searchy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SW.SimplyRazor.SampleWeb.Models;

namespace SW.SimplyRazor.SampleWeb
{
    public class EmployeeSearchService : ISearchyService
    {
        public string Serves => typeof(Employee).FullName;

        public IEnumerable<ISearchyFilterConfig> FilterConfigs => new List<ISearchyFilterConfig>() 
            { new SearchyFilterConfig {Field = "Id", Text = "The Id", Type = FilterDataType.Int }  };

        public Task<IEnumerable<object>> Search(SearchyRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
