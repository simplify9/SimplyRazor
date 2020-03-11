using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor.SampleWeb.Resources.Employees
{
    public class Get : IGetHandler<int>
    {
        async public Task<object> Handle(int key, bool lookup = false)
        {
            await Task.Delay(TimeSpan.FromSeconds(3));
            return SW.BogusDataModels.FakeEmployees.Data[0];
        }
    }
}
