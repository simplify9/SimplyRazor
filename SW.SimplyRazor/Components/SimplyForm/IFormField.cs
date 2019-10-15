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
        //FieldDisplayMode Mode { get; set; }

        string Help { get; set; }

        Type Component { get; set; }
        //bool Readonly { get; set; }

        FieldVisibility Visibility { get; set; }

        //string InvalidClass { get; set; }


    }
}
