using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor.SampleWeb.Models
{
    public class Parcel
    {
        public Parcel()
        {
            //Address.Street.  
        }

        public string Reference { get; set; }
        public Weight Weight { get; set; }

        public StreetAddress Address { get; set; }


    }
}
