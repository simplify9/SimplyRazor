
using Newtonsoft.Json;
using System;


namespace SW.SimplyRazor 
{
    public static  class Object
    {

        private static Type GetNullableType(Type type)
        {
            if (type == typeof(string)) return typeof(string);
            if (type == typeof(object)) return typeof(object);
            return Nullable.GetUnderlyingType(type);
        }

        public static dynamic ConvertValueToType(object value, Type type)
        {
             
            bool typeNullable = (GetNullableType(type) == null) ? false : true;

            if (value is null && typeNullable) return null;

            else if (value is null) return Activator.CreateInstance(type);  

            if (value.GetType() == type) return value;

            var t = GetNullableType(type);
            if (t != null) 
            {
                type = t;
                if (string.IsNullOrEmpty(value.ToString())) return null;  
            } 

            return Convert.ChangeType(value, type);
        }

        public static T DeepClone<T>(T obj)
        {
            return JsonConvert.DeserializeObject<T>(JsonConvert.SerializeObject(obj));
        }

        public static void DeepClone(object obj, object target)
        {
            JsonConvert.PopulateObject(JsonConvert.SerializeObject(obj), target);
        }
    }
}
