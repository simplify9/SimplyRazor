

namespace SW.SimplyRazor
{
    public class TableItem : TableItem<object>
    {
    }

    public class TableItem<T>
    {
        public TableItemFlag Flag { get; set; }
        public T Item { get; set; }
    }
}
