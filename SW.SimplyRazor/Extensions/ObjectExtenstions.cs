using Newtonsoft.Json;
using System;

namespace SW.SimplyRazor 
{
    public static  class Object
    {
        public static T DeepClone<T>(T obj)
        {
            return JsonConvert.DeserializeObject<T>(JsonConvert.SerializeObject(obj));
        }

        public static object DeepClone(object obj, Type type)
        {
            return JsonConvert.DeserializeObject(JsonConvert.SerializeObject(obj), type);
        }

        public static void DeepClone(object obj, object target)
        {
            JsonConvert.PopulateObject(JsonConvert.SerializeObject(obj), target);
        }
    }
}
