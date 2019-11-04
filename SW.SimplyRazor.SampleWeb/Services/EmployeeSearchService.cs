using SW.BogusDataModels;
using SW.ModelApi;
using SW.PrimitiveTypes;
using SW.Searchy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace SW.SimplyRazor.SampleWeb
{
    public class EmployeeSearchService : ISearchable<Employee>, IModelApi
    {
        public Task<IEnumerable<ISearchyFilterConfig>> GetFilterConfigs()
        {
            IEnumerable<ISearchyFilterConfig> result = new List<ISearchyFilterConfig>
            {
                new SearchyFilterConfig
                {
                    Field = "Id",
                    Text = "Id",
                    Type = SearchyFilterConfigType.Number,
                    Rules=SearchyFilterConfigType.RulesFor(SearchyFilterConfigType.Number)
                },
                new SearchyFilterConfig
                {
                    Field = "FirstName",
                    Text = "First Name",
                    Type = SearchyFilterConfigType.Text,
                    Required = true,
                    Rules=SearchyFilterConfigType.RulesFor(SearchyFilterConfigType.Text)
                },
                new SearchyFilterConfig
                {
                    Field = "LastName",
                    Text = "Last Name",
                    Type = SearchyFilterConfigType.Text ,
                    Rules=SearchyFilterConfigType.RulesFor(SearchyFilterConfigType.Text)
                },
            };

            return Task.FromResult(result);
        }

        async public Task<SearchyResponse<Employee>> Search(SearchyRequest request)
        {
            await Task.Delay(TimeSpan.FromMilliseconds(500));

            var result = FakeEmployees.Data.AsQueryable().Search(request.Conditions, request.Sorts, request.PageSize, request.PageIndex);

            return new SearchyResponse<Employee>
            {
                Result = result,
                TotalCount = FakeEmployees.Data.AsQueryable().Search(request.Conditions).Count()
            };
        }
    }
}
