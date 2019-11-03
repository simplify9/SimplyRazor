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
    public class IntMockLookupService : ILookable<MockModel>, IModelApi
    {
        public IntMockLookupService()
        {
        }

        public string[] Serves => new[] { "intmock" };


        public Task<string> LookupValue(object key)
        {
            return Task.FromResult("sssssss"); //return Task.FromResult(i18NService.Countries.Get(key.ToString() ).Name);
        }

        public Task<IEnumerable<KeyValuePair<object, string>>> LookupList(string searchPhrase = "", SearchyRequest  searchyRequest = null)
        {
            //throw new NotImplementedException();

            IEnumerable<KeyValuePair<object, string>> result = new List<KeyValuePair<object, string>>()
            {
                new KeyValuePair<object, string> (1,"Text1"),
                new KeyValuePair<object, string> (2, "Text2"),
                new KeyValuePair<object, string> (3,"Text3"),
                new KeyValuePair<object, string> (4,"Text4"),
                new KeyValuePair<object, string> (5,"Text5"),

            };

            return Task.FromResult(result);  


        }
    }

}
