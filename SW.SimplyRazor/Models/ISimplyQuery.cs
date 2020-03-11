using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface ISimplyQuery<TResult>
    {
        Task Refresh();
        TResult CurrentResult { get; set; }
    }
}
