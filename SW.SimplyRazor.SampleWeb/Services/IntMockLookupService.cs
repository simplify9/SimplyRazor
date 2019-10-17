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

        public Task<IEnumerable<KeyValuePair<string, string>>> Search(string lookupServiceName, string searchFor)
        {
            //throw new NotImplementedException();

            IEnumerable<KeyValuePair<string, string>> result = new List<KeyValuePair<string, string>>()
            {
                new KeyValuePair<string, string> ("1","Text1"),
                new KeyValuePair<string, string> ("2","Text2"),
                new KeyValuePair<string, string> ("3","Text3"),
                new KeyValuePair<string, string> ("4","Text4"),
                new KeyValuePair<string, string> ("5","Text5"),

            };

            return Task.FromResult(result);  


        }
    }

}
