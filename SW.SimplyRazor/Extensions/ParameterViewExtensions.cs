using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;

namespace SW.SimplyRazor
{
    public static class ParameterViewExtensions
    {
        public static ParameterViewChangeResult DetectChanges(this ParameterView parameterView)
        {
            return new ParameterViewChangeResult
            {
                Parameters = parameterView.ToDictionary()
            };
        }
    }

    public class ParameterViewChangeResult
    {
        public IReadOnlyDictionary<string, object> Parameters { get; set; }
        public bool Result { get; set; }

        public ParameterViewChangeResult Parameter(string name, object value)
        {
            return new ParameterViewChangeResult
            {
                Parameters = Parameters,
                //Result = 
            };
        }
    }
}
