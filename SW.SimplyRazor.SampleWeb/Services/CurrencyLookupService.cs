using SW.I18n;
using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorLob3.Services
{
    public class CurrencyLookupService : ILookupService
    {
        readonly I18nService i18NService;
        public CurrencyLookupService(I18nService i18NService)
        {
            this.i18NService = i18NService;
        }

        public string[] Serves => new[] { "currency" };


        public Task<string> Get(string lookupServiceName, object key)
        {
            return Task.FromResult(i18NService.Currencies.Get(key.ToString() ).Code);
        }

        public Task<IEnumerable<KeyValuePair<object, string>>> Search(string lookup, string search = null, string filter = null)
        {
            return Task.FromResult(i18NService.Currencies.List()
                .Where(c => string.IsNullOrWhiteSpace(search) ? true : c.Code.Contains(search, StringComparison.InvariantCultureIgnoreCase))
                .Select(c => new KeyValuePair<object, string>(c.Code, c.Name)));

        }
    }

}
