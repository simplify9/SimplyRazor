using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface ISimplyTable
    {
        Task AddModel();
        Task ChangeModel(int index);
        Task RemoveModel(int index);
            
    }
}
