using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace SW.SimplyRazor
{
    public static class TypeExtensions
    {
        public static PropertyInfo GetPropertyInfo(this Type type, string propertyName)
        {
            var nameArray = propertyName.Split('.');
            var propInfo = type.GetProperty(nameArray[0]);

            for (int i = 1; i < nameArray.Length; i++)

                propInfo = propInfo.PropertyType.GetProperty(nameArray[i]);

            return propInfo;
        }

    }
}
