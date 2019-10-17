using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SW.I18n;
using SW.PrimitiveTypes;

namespace BlazorLob3.Services
{
    public class CountryLookupService : ILookupService
    {
        readonly I18nService i18NService;
        public CountryLookupService(I18nService i18NService)
        {
            this.i18NService = i18NService;
        }

        public string[] Serves => new[] { "country" };



        public Task<string> Get(string lookupServiceName, object key)
        {
            return Task.FromResult(i18NService.Countries.Get(key.ToString() ).Name);
        }

        public Task<IEnumerable<KeyValuePair<object, string>>> Search(string lookup, string search = null, string filter = null)
        {
            //throw new NotImplementedException();

            return Task.FromResult(i18NService.Countries.List()
                .Where(c => string.IsNullOrWhiteSpace(search) ? true : c.Name.Contains(search, StringComparison.InvariantCultureIgnoreCase))
                .Select(c => new KeyValuePair<object, string>(c.Code, c.Name)));

        }


    }

}
