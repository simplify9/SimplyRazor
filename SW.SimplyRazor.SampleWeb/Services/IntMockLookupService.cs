using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SW.I18n;

namespace BlazorLob3.Services
{
    public class IntMockLookupService : ILookupService
    {
        public IntMockLookupService()
        {
        }

        public bool CanServe(string lookupServiceName)
        {
            return lookupServiceName.ToLower() == "intmock";
        }

        public Task<string> Get(string lookupServiceName, object key)
        {
            return Task.FromResult(""); //return Task.FromResult(i18NService.Countries.Get(key.ToString() ).Name);
        }

        public Task<IEnumerable<KeyValuePair<object, string>>> Search(string lookupServiceName, string searchFor)
        {
            //throw new NotImplementedException();

            IEnumerable<KeyValuePair<object, string>> result = new List<KeyValuePair<object, string>>()
            {
                new KeyValuePair<object, string> (1,"Text1"),
                new KeyValuePair<object, string> (2,"Text2"),
                new KeyValuePair<object, string> (3,"Text3"),
                new KeyValuePair<object, string> (4,"Text4"),
                new KeyValuePair<object, string> (5,"Text5"),

            };

            return Task.FromResult(result);  


        }
    }

}
