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
        public Task<IEnumerable<ISearchyFilterSetup>> GetFilterSetup()
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
