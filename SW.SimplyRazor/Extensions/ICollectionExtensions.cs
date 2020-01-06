using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    static class ICollectionExtensions
    {
        public static void RemoveAt<T>(this ICollection<T> collection, int index)
        {
            var i = 0;
            foreach (var item in collection)
            {
                if (index == i)
                {
                    collection.Remove(item);
                    break;
                }
                i++;
            }

        }

        public static T GetAt<T>(this ICollection<T> collection, int index)
        {
            var i = 0;
            foreach (var item in collection)
            {
                if (index == i)
                {
                    return item;
                }
                i++;
            }
            return default;

        }
    }
}
