using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface IFormField
    {
        string FormId { get; }
        string Name { get; set; }
        string Display { get; set; }
        string Help { get; set; }
        Type Editor { get; set; }
        FieldVisibility Visibility { get; set; }
        string Lookup { get; set; }
    }
}
