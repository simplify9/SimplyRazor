using Newtonsoft.Json;
using System;


namespace BlazorLob3.Extensions
{
    public static  class ObjectExtenstions
    {
        public static dynamic ConvertObjectToType(this object TargetObject, Type TargetType)
        {
            if (TargetObject == null)
                return null;

            var _ObjType = TargetObject.GetType();

            switch (true)
            {
                case object _ when _ObjType == TargetType:
                    {
                        return TargetObject;
                    }

                case object _ when TargetType == typeof(bool):
                case object _ when TargetType == typeof(bool?):
                    {
                        return Convert.ToBoolean(TargetObject);
                    }

                case object _ when TargetType == typeof(long):
                case object _ when TargetType == typeof(long?):
                    {
                        return Convert.ToInt64(TargetObject);
                    }

                case object _ when TargetType == typeof(int):
                case object _ when TargetType == typeof(int?):
                    {
                        return Convert.ToInt32(TargetObject);
                    }

                case object _ when TargetType == typeof(double):
                case object _ when TargetType == typeof(double?):
                    {
                        return Convert.ToDouble(TargetObject);
                    }

                case object _ when TargetType == typeof(short):
                case object _ when TargetType == typeof(short?):
                    {
                        return Convert.ToInt16(TargetObject);
                    }

                case object _ when TargetType == typeof(byte):
                case object _ when TargetType == typeof(byte?):
                    {
                        return Convert.ToByte(TargetObject);
                    }

                case object _ when TargetType == typeof(DateTime):
                case object _ when TargetType == typeof(DateTime?):
                    {
                        return Convert.ToDateTime(TargetObject);
                    }

                case object _ when TargetType == typeof(DateTime):
                case object _ when TargetType == typeof(DateTime?):
                    {
                        return Convert.ToDateTime(TargetObject);
                    }

                case object _ when TargetType == typeof(decimal):
                case object _ when TargetType == typeof(decimal?):
                    {
                        return Convert.ToDecimal(TargetObject);
                    }

                case object _ when TargetType == typeof(Guid):
                case object _ when TargetType == typeof(Guid?):
                    {
                        if (TargetObject.GetType() == typeof(string))
                            return new Guid(Convert.ToString(TargetObject));
                        else if (TargetObject.GetType() == typeof(Guid))
                            return (Guid)TargetObject;
                        break;
                    }

                default:
                    {
                        throw new Exception("Unsupported type conversion.");
                    }
            }
            return null;
        }

        public static T DeepClone<T>(this T obj)
        {
            return JsonConvert.DeserializeObject<T>(JsonConvert.SerializeObject(obj));
        }

        public static void DeepCloneTo(this object obj, object target)
        {
             JsonConvert.PopulateObject(JsonConvert.SerializeObject(obj), target);
        }



    }
}
