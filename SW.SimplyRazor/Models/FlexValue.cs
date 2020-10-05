using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    internal class FlexValue
    {

        public FlexValue(ExtendedProperty property)
        {
            ExtendedProperty = property;
        }

        public FlexValue(ExtendedProperty property, string value) : this(property)
        {
            switch (property.Type)
            {
                case ExtendedPropertyType.Text:
                    ValueString = value.ConvertValueToType<string>();
                    break;
                case ExtendedPropertyType.Decimal:
                    ValueDecimal = (decimal?)value.ConvertValueToType(typeof(decimal?));
                    break;
                case ExtendedPropertyType.DateTime:
                    ValueDateTime = (DateTime?)value.ConvertValueToType(typeof(DateTime?));
                    break;

            }
        }

        public ExtendedProperty ExtendedProperty { get; private set; }
        public string ValueString { get; set; }
        public string[] ValueStringArray { get; set; }
        public decimal? ValueDecimal { get; set; }
        public decimal[] ValueDecimalArray { get; set; }
        public DateTime? ValueDateTime { get; set; }
        public DateTime[] ValueDateTimeArray { get; set; }

        public override string ToString()
        {
            if (ValueString != null)
                return ValueString;
            else if (ValueDecimal != null)
                return ValueDecimal.ToString();
            else if (ValueDateTime != null)
                return ValueDateTime.Value.ToString("O");

            return null;
        }
    }
}
