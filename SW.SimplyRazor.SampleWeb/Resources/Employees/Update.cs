using SW.BogusDataModels;
using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor.SampleWeb.Resources.Employees
{
    public class Update : ICommandHandler<int, Employee>
    {
        async public Task<object> Handle(int key, Employee request)
        {
            await Task.Delay(TimeSpan.FromSeconds(5));

            //throw new SWException("Invalid employee nunmber"); 
            return null;
        }
    }
}
