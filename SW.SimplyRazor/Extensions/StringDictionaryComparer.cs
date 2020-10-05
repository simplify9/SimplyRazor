using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    internal class StringDictionaryComparer : IEqualityComparer<IDictionary<string, string>>
    {
        public static bool Compare(IDictionary<string, string> x, IDictionary<string, string> y)
        {
            return new StringDictionaryComparer().Equals(x, y);
        }

        public bool Equals(IDictionary<string, string> x, IDictionary<string, string> y)
        {
            return CollectionComparer<string>.Compare( x?.Keys, y?.Keys) && 
                CollectionComparer<string>.Compare(x?.Values, y?.Values);
        }

        public int GetHashCode(IDictionary<string, string> obj)
        {
            throw new NotImplementedException();
        }
    }

}
