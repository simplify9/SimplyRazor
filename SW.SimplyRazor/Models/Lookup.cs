using System;
using System.Collections;

namespace SW.SimplyRazor
{
    public class Lookup
    {
        private Lookup()
        {
        }

        public LookupType Type { get; private set; }
        public IEnumerable List { get; private set; }

        public bool HasValueUrl => ValueUrl != null;
        private string ListUrl { get;  set; }
        private string ValueUrl { get;  set; }

        public static Lookup FromSearchy(string searchyUrl, bool noValue = false)
        {
            if (string.IsNullOrWhiteSpace(searchyUrl))
            {
                throw new ArgumentException($"'{nameof(searchyUrl)}' cannot be null or whitespace", nameof(searchyUrl));
            }

            return new Lookup
            {
                Type = LookupType.Api,
                ListUrl = $"{searchyUrl}?lookup=true&search={{search}}&format=1",
                ValueUrl = noValue ? null : $"{searchyUrl}/{{value}}?lookup=true&format=1"
            };
        }

        public static Lookup From(string listUrl, string valueUrl = null)
        {
            if (string.IsNullOrWhiteSpace(listUrl))
            {
                throw new ArgumentException($"'{nameof(listUrl)}' cannot be null or whitespace", nameof(listUrl));
            }

            return new Lookup
            {
                Type = LookupType.Api,
                ListUrl = listUrl,
                ValueUrl = valueUrl
            };
        }

        public static Lookup From(IEnumerable list)
        {
            return new Lookup
            {
                Type = LookupType.Api,
                List = list
            };
        }

        public string ApplyValue(object value)
        {
            if (value == null) return null;
            if (ValueUrl == null) return null;
            return ValueUrl.Replace("{value}", value.ToString(), StringComparison.OrdinalIgnoreCase);
        }

        public string ApplySearch(string value = null)
        {
            if (value == null) return ListUrl.Replace("{search}",string.Empty);
            return ListUrl.Replace("{search}", value.ToString(), StringComparison.OrdinalIgnoreCase);
        }
    }

    public enum LookupType
    {
        Api = 1,
        List = 2
    }
}
