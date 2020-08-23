

namespace SW.SimplyRazor
{
    public class TableItem<TModel>
    {
        public TableItemFlag Flag { get; set; }
        public TModel Item { get; set; }
    }
}
