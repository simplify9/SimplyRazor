using SW.BogusDataModels;
using SW.PrimitiveTypes;
using SW.Searchy;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using SW.ExportToExcel;

namespace SW.SimplyRazor.SampleWeb.Resources.Employees
{
    [HandlerName("export")]
    public class Export : ICommandHandler<SearchyRequest>
    {
        async public Task<object> Handle(SearchyRequest request)
        {
            Directory.CreateDirectory("./uploads");

            var fileId = Guid.NewGuid().ToString("N");
            var filePath = $"./uploads/{fileId}";

            var result = FakeEmployees.Data.AsQueryable().Search(request.Conditions);

            await result.WriteExcel(filePath);

            return new RemoteBlob
            {
                Location = fileId,
                MimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                Name = "export.xlsx",
            };
            //    return new SearchyResponse<Employee>
            //    {
            //        Result = result,
            //        TotalCount = 10 // FakeEmployees.Data.AsQueryable().Search(request.Conditions).Count()
            //    };
        }
    }
}
