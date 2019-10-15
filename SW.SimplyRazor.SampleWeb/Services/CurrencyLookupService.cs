using SW.I18n;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorLob3.Services
{
    public class CurrencyLookupService : ILookupService<string>
    {
        readonly I18nService i18NService;
        public CurrencyLookupService(I18nService i18NService)
        {
            this.i18NService = i18NService;
        }

        public bool CanServe(string lookupServiceName)
        {
            return lookupServiceName.ToLower() == "currency";
        }

        public Task<string> Get(string lookupServiceName, string key)
        {
            return Task.FromResult(i18NService.Currencies.Get(key).Code);
        }

        public Task<IEnumerable<KeyValuePair<string, string>>> Search(string lookupServiceName, string searchFor)
        {
            return Task.FromResult(i18NService.Currencies.List()
                .Where(c => string.IsNullOrWhiteSpace(searchFor) ? true : c.Code.Contains(searchFor, StringComparison.InvariantCultureIgnoreCase))
                .Select(c => new KeyValuePair<string, string>(c.Code, c.Name)));

        }
    }

}
