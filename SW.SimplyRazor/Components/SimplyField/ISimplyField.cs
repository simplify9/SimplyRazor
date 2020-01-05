using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface ISimplyField
    {
        //string FormId { get; }
        string Name { get; set; }
        string Text { get; set; }
        string Help { get; set; }
        //Type Editor { get; set; }
        //FieldShowsOn ShowsOn { get; set; }
        string Lookup { get; set; }
        string Id { get; }
        object Value { get; }
        bool IsInvalid { get; }
        string InvalidFeedback { get; set; }
        PropertyInfo PropertyInfo { get; }
        //dynamic Model { get; }
    }
}
