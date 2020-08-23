using Newtonsoft.Json;
using System;

namespace SW.SimplyRazor
{
    public static class ObjectExtensions
    {
        //public static T DeepClone<T>(T obj)
        //{
        //    return JsonConvert.DeserializeObject<T>(JsonConvert.SerializeObject(obj));
        //}

        public static object DeepClone(this object obj, Type type)
        {
            return JsonConvert.DeserializeObject(JsonConvert.SerializeObject(obj), type);
        }

        public static void DeepClone(this object obj, object target)
        {
            JsonConvert.PopulateObject(JsonConvert.SerializeObject(obj), target);
        }
    }
}
