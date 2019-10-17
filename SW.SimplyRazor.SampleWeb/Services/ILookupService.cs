using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorLob3.Services
{
    public interface ILookupService
    {
        Task<IEnumerable<KeyValuePair<string, string>>> Search(string lookupServiceName, string searchFor);
        Task<string> Get(string lookupServiceName, object key);
        bool CanServe(string lookupServiceName);
    }
}
