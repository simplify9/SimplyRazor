using SW.BogusDataModels;
using SW.Searchy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace SW.SimplyRazor.SampleWeb
{
    public class EmployeeSearchService : ISearchyService
    {
        public string Serves => typeof(Employee).FullName;

        public IEnumerable<ISearchyFilterConfig> FilterConfigs => new List<ISearchyFilterConfig>()
        { 
            new SearchyFilterConfig {Field = "Id", Text = "Id", Type = SearchyFilterConfigType.Int },
            new SearchyFilterConfig {Field = "FirstName", Text = "First Name", Type = SearchyFilterConfigType.String },
            new SearchyFilterConfig {Field = "LastName", Text = "Last Name", Type = SearchyFilterConfigType.String },

        };

        async public Task<SearchyResponse> Search(SearchyRequest request)
        {
            await Task.Delay(TimeSpan.FromMilliseconds(500));

            return new SearchyResponse 
            { 
                Result =  FakeEmployees.Data.AsQueryable().Search(request.Conditions, null, request.PageSize, request.PageIndex) 
            };
        }
    }
}
