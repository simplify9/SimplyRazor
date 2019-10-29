
using System;
using System.Text.Json;

namespace SW.SimplyRazor 
{
    public static  class Object
    {
        //public static dynamic ConvertObjectToType(this object TargetObject, Type TargetType)
        //{
        //    if (TargetObject == null)
        //        return null;

        //    var _ObjType = TargetObject.GetType();

        //    switch (true)
        //    {
        //        case object _ when _ObjType == TargetType:
        //            {
        //                return TargetObject;
        //            }

        //        case object _ when TargetType == typeof(bool):
        //        case object _ when TargetType == typeof(bool?):
        //            {
        //                return Convert.ToBoolean(TargetObject);
        //            }

        //        case object _ when TargetType == typeof(long):
        //        case object _ when TargetType == typeof(long?):
        //            {
        //                return Convert.ToInt64(TargetObject);
        //            }

        //        case object _ when TargetType == typeof(int):
        //        case object _ when TargetType == typeof(int?):
        //            {
        //                return Convert.ToInt32(TargetObject);
        //            }

        //        case object _ when TargetType == typeof(double):
        //        case object _ when TargetType == typeof(double?):
        //            {
        //                return Convert.ToDouble(TargetObject);
        //            }

        //        case object _ when TargetType == typeof(short):
        //        case object _ when TargetType == typeof(short?):
        //            {
        //                return Convert.ToInt16(TargetObject);
        //            }

        //        case object _ when TargetType == typeof(byte):
        //        case object _ when TargetType == typeof(byte?):
        //            {
        //                return Convert.ToByte(TargetObject);
        //            }

        //        case object _ when TargetType == typeof(DateTime):
        //        case object _ when TargetType == typeof(DateTime?):
        //            {
        //                return Convert.ToDateTime(TargetObject);
        //            }

        //        case object _ when TargetType == typeof(DateTime):
        //        case object _ when TargetType == typeof(DateTime?):
        //            {
        //                return Convert.ToDateTime(TargetObject);
        //            }

        //        case object _ when TargetType == typeof(decimal):
        //        case object _ when TargetType == typeof(decimal?):
        //            {
        //                return Convert.ToDecimal(TargetObject);
        //            }

        //        case object _ when TargetType == typeof(Guid):
        //        case object _ when TargetType == typeof(Guid?):
        //            {
        //                if (TargetObject.GetType() == typeof(string))
        //                    return new Guid(Convert.ToString(TargetObject));
        //                else if (TargetObject.GetType() == typeof(Guid))
        //                    return (Guid)TargetObject;
        //                break;
        //            }

        //        default:
        //            {
        //                throw new Exception("Unsupported type conversion.");
        //            }
        //    }
        //    return null;
        //}

        public static dynamic ConvertValueToType(this object value, Type type)
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

        public static T DeepClone<T>(this T obj)
        {
            return JsonSerializer.Deserialize<T>(JsonSerializer.Serialize(obj));
        }

        public static void DeepCloneTo(this object obj, object target)
        {
            //JsonSerializer.
             //JsonConvert.PopulateObject(JsonConvert.SerializeObject(obj), target);
        }



    }
}
