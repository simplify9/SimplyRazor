using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface IField
    {
        string Name { get; set; }
        string Text { get; set; }
        string Help { get; set; }
        string Lookup { get; set; }
        string Id { get; }
        object Value { get; }
        bool IsInvalid { get; }
        //string InvalidFeedback { get; set; }
        PropertyInfo PropertyInfo { get; }
        InputType InputType { get; set; }
        IFieldAction Action { get; }
        object Model { get;  }
        int TypeAhead { get; }

        bool ReadOnly { get; }

    }
}
