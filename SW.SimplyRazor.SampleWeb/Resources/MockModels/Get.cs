using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor.SampleWeb.Resources.MockModels
{
    public class Get : IGetHandler<string>
    {
        async public Task<object> Handle(string key, bool lookup = false)
        {
            return "sssssss"; //return Task.FromResult(i18NService.Countries.Get(key.ToString() ).Name);
        }
    }
}
