using SW.HttpExtensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor.SampleWeb
{
    public class SampleClientOptions : ApiClientOptionsBase
    {
        public override string ConfigurationSection => "SampleClient";
    }
}
