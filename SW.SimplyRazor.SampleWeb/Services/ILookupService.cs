using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorLob3.Services
{
    public interface ILookupService<TKey>
    {
        Task<IEnumerable<KeyValuePair<TKey, string>>> Search(string lookupServiceName, string searchFor);
        Task<string> Get(string lookupServiceName, TKey key);
        bool CanServe(string lookupServiceName);
    }
}
