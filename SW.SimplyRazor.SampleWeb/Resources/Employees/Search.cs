using SW.BogusDataModels;
using SW.PrimitiveTypes;
using SW.Searchy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor.SampleWeb.Resources.Employees
{
    public class Search : ISearchyHandler
    {
        async public Task<object> Handle(SearchyRequest request, bool lookup = false, string searchPhrase = null)
        {
            //await Task.Delay(TimeSpan.FromMilliseconds(500));

            var result = FakeEmployees.Data.AsQueryable().Search(request.Conditions, request.Sorts, request.PageSize, request.PageIndex);

            return new SearchyResponse<Employee>
            {
                Result = result,
                TotalCount = FakeEmployees.Data.AsQueryable().Search(request.Conditions).Count()
            };
        }
    }
}
