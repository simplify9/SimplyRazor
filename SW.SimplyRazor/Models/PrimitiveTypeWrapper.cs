using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    class PrimitiveTypeWrapper<T>
    {
        public T Value { get; set; }

        public override bool Equals(object obj)
        {
            if (obj.GetType() == typeof(PrimitiveTypeWrapper<T>))
                return EqualityComparer<T>.Default.Equals(Value, ((PrimitiveTypeWrapper<T>)obj).Value);
            return false;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Value);
        }
    }

}
