using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    public interface IColumn
    {
        string Title { get; set; }
        string Field { get; set; }
    }
}
