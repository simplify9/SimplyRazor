using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface ISimplyForm
    {
        void AddField(FieldState formField);
        Task FieldValueChanged(string name);

        string Id { get;  }

    }
}
