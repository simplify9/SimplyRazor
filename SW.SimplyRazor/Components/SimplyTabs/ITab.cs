using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    public interface ITab
    {
        RenderFragment ChildContent { get; }
    }
}
