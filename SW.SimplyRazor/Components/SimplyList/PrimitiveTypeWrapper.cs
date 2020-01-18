using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    class PrimitiveTypeWrapper<T>
    {
        public T Value { get; set; }
    }

    class PrimitiveTypeWrapper
    {
        public object Value { get; set; }
    }
}
