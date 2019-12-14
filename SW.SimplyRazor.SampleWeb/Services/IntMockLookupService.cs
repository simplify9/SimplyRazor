using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SW.BogusDataModels;
using SW.I18n;
using SW.ModelApi;
using SW.PrimitiveTypes;

namespace SW.SimplyRazor.SampleWeb 
{
    public class IntMockLookupService : ILookable<MockModel>, IMapi
    {
        public IntMockLookupService()
        {
        }

        public string[] Serves => new[] { "intmock" };


        public Task<string> LookupValue(string key)
        {
            return Task.FromResult("sssssss"); //return Task.FromResult(i18NService.Countries.Get(key.ToString() ).Name);
        }

        public Task<IDictionary<string, string>> LookupList(string searchPhrase = null, SearchyRequest  searchyRequest = null)
        {
            //throw new NotImplementedException();

            IDictionary<string, string> result = new Dictionary<string, string>()
            {
                { "1","Text1" },
                { "2", "Text2" },
                { "3","Text3" },
                { "4","Text4" },
                { "5","Text5" },

            };

            return Task.FromResult(result);  


        }
    }

}
