
using System;
using Force.DeepCloner;

namespace SW.SimplyRazor 
{
    public static  class Object
    {
        public static dynamic ConvertValueToType( object value, Type type)
        {

            bool typeNullable = (Nullable.GetUnderlyingType(type) == null) ? false : true;

            if (value is null && typeNullable) return null;

            else if (value is null) return Activator.CreateInstance(type);  

            if (value.GetType() == type) return value;

            var t = Nullable.GetUnderlyingType(type);
            if (t != null) 
            {
                type = t;
                if (string.IsNullOrEmpty(value.ToString())) return null;  
            } 

            return Convert.ChangeType(value, type);
        }

        public static T DeepClone<T>(T obj)
        {
            return obj.DeepClone();
        }

        public static void DeepClone(object obj, object target)
        {
            obj.DeepCloneTo(target);
        }
    }
}
