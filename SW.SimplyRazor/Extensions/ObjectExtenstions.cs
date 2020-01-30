
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

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

        public static object ConvertValueToType(object value, Type type)
        {
             
            bool typeNullable = (GetNullableType(type) == null) ? false : true;

            if (value is null && typeNullable) return null;

            else if (value is null) return Activator.CreateInstance(type);

            if (value.GetType() == type) return value;
            if (type.IsAssignableFrom(value.GetType())) return value;

            var nakedType = GetNullableType(type);
            if (nakedType != null) 
            {
                if (string.IsNullOrWhiteSpace(value.ToString())) return null;

                if (nakedType.IsEnum) return Enum.Parse(nakedType, value.ToString());
                return Convert.ChangeType(value, nakedType);
            }

            if (type.IsEnum) return Enum.Parse(type, value.ToString());
            return Convert.ChangeType(value, type);
        }

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
