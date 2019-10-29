using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{

    public interface IModelMapping
    {
        string Name { get; }
        Type Type { get; }
    }

    public class ModelMapping<T> : IModelMapping
    {
        public ModelMapping(string name)
        {
            Name = name;
            Type = typeof(T);
        }

        public string Name { get; }
        public Type Type { get; }
    }
}
