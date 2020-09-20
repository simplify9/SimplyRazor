

using System;
using System.Linq.Expressions;

namespace SW.SimplyRazor
{
    public class TableItem : TableItem<object>
    {
    }

    public class TableItem<T>
    {
        public TableItemFlag Flag { get; set; }
        public T Item { get; set; }

        public void When(TableItemFlag tableItemFlag, Action<TableItem<T>> action)
        {
            if (Flag == tableItemFlag)
                action.Invoke(this);
        }
    }


}
