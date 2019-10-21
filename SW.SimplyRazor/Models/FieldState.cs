using Humanizer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;


namespace SW.SimplyRazor
{
    public class FieldState : ISimplyField
    {
        public dynamic ItemData { get; private set; }

        public FieldState(ISimplyField formField, object model) : this(formField, model.GetType(), model) { }
        private FieldState(ISimplyField formField, Type modelType, object model)
        {
            Name = formField.Name;
            Help = formField.Help;
            FormId = formField.FormId;
            ShowsOn = formField.ShowsOn;
            Editor = formField.Editor;
            Lookup = formField.Lookup;
            Text = formField.Text;

            var childModelType = modelType;
            ItemData = model;

            if (Name is null) return;

            var arr = Name.Split('.');

            if (arr.Length > 1)
            {
                for (var i = 0; i < arr.Length - 1; i++)
                {
                    var pInfo = childModelType.GetProperty(arr[i]);
                    childModelType = pInfo.PropertyType;
                    if (ItemData != null) ItemData = pInfo.GetValue(ItemData);
                };
                PropertyInfo = childModelType.GetProperty(arr[arr.Length - 1]);
            }
            else
            {
                PropertyInfo = childModelType.GetProperty(Name);
            }

            if (PropertyInfo.PropertyType == typeof(bool))
            {
                if (Editor == null) Editor = typeof(EditorForBoolean);
            }
            else
            {
                if (Editor == null) Editor = (Lookup == null) ? typeof(EditorForText) : typeof(EditorForTextAsSelect);
            }
        }

        public  PropertyInfo PropertyInfo { get; private set; }
        public string Id => $"{FormId}_{Name}".Replace(".", "_").ToLower();
        public string FormId { get; }
        public string Name { get; set; }

        string text = null;
        public string Text
        {
            get => (text == null) ? Name?.Humanize() : Text;
            set => text = value;
        }

        public Type Editor { get; set; }
        public FieldShowsOn ShowsOn { get; set; }
        public string Lookup { get; set; }
        public string Help { get; set; }
        //public string InputType { get; set; }
        public string InvalidFeedback { get; set; }
        public bool IsInvalid => InvalidFeedback != null;
        public object Value => ItemData !=null ? PropertyInfo.GetValue(ItemData) : null;
        public bool TrySetValue(object value)
        {
            try
            {
                //if (value==null) propertyInfo.SetValue(ItemData, default() );
                var typedValue = value.ConvertObjectToType(PropertyInfo.PropertyType);
                PropertyInfo.SetValue(ItemData, typedValue);
                InvalidFeedback = null;
                return true;
            }
            catch (Exception)
            {
                InvalidFeedback = "Failed to set value.";
                return false;
            }
        }


    }
}
