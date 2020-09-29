using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    internal static class DateTimeExtensions
    {
        public static DateTime ChangeKind(this DateTime dateTime, DateTimeKind kind = DateTimeKind.Unspecified)
        {
            return new DateTime(dateTime.Year, dateTime.Month, dateTime.Day, dateTime.Hour, dateTime.Minute, dateTime.Second, kind);
        }
    }
}
