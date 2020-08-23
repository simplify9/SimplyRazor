using Newtonsoft.Json;
using System;
using System.Reflection;

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


        public static object GetValue(this object obj, string propertyName)
        {
            var nameArray = propertyName.Split('.');

            for (int i = 0; i < nameArray.Length - 1; i++)
            {
                var targetProp = obj.GetType().GetProperty(nameArray[i]);
                var nextType = targetProp.PropertyType;
                var nextObj = targetProp.GetValue(obj);
                if (nextObj == null)
                {
                    nextObj = Activator.CreateInstance(nextType);
                    targetProp.SetValue(obj, nextObj);
                }

                obj = nextObj;
            }

            return obj;
        }
    }
}
