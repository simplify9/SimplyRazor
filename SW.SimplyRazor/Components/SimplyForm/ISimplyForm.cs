using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface ISimplyForm
    {
        void AddField(FieldState formField);
        void RemoveField(string name);

        Task FieldValueChanged(string name);

        IDictionary<string, FieldState> Fields { get; set; }


        string Id { get;  }

    }
}
