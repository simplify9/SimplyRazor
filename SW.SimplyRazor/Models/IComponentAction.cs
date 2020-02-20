using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface IComponentAction
    {
        Task Invoke(string actionName, object actionValue);
    }
}
