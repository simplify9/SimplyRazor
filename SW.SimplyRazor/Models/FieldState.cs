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
        //public dynamic ItemData { get; private set; }
        public dynamic ModelData { get; }
        //public Type ItemType { get; }
        //public Type ModelType { get; }

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

            ModelData = model;

            if (Name is null) return;

            var arr = Name.Split('.');

            PropertyInfo = model.GetType().GetProperty(arr[0]);
            for (int i = 1; i < arr.Length; i++)
            {
                PropertyInfo = PropertyInfo.PropertyType.GetProperty(arr[i]);
            }

            //ItemType = modelType;

            //if (arr.Length > 1)

            //    for (int i = 0; i < arr.Length - 1; i++)

            //        ItemType = ItemType.GetProperty(arr[i]).PropertyType;


            if (PropertyInfo.PropertyType == typeof(bool))
            {
                if (Editor == null) Editor = typeof(EditorForBoolean);
            }
            else
            {
                if (Editor == null) Editor = (Lookup == null) ? typeof(EditorForText) : typeof(EditorForTextAsSelect);
            }
        }

        public PropertyInfo PropertyInfo { get; }
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
        public object Value
        {
            get
            {
                var arr = Name.Split('.');
                object obj = ModelData;
                if (arr.Length > 1)

                    for (int i = 0; i < arr.Length - 1; i++)
                    {
                        if (obj != null) obj = obj.GetType().GetProperty(arr[i]).GetValue(obj);
                    }

                if (obj != null) return PropertyInfo.GetValue(obj);

                return null;
            }
        }


        public bool TrySetValue(object value)
        {
            //try
            //{
            //if (value==null) propertyInfo.SetValue(ItemData, default() );
            var arr = Name.Split('.');
            object obj = ModelData;
            if (arr.Length > 1)

                for (int i = 0; i < arr.Length - 1; i++)
                {
                    var nextType = obj.GetType().GetProperty(arr[i]).PropertyType;
                    var nextObj = obj.GetType().GetProperty(arr[i]).GetValue(obj);
                    if (nextObj == null)
                    {
                        nextObj = Activator.CreateInstance(nextType);
                        obj.GetType().GetProperty(arr[i]).SetValue(obj, nextObj);
                    }

                    obj = nextObj;
                }

            var typedValue = value.ConvertObjectToType(PropertyInfo.PropertyType);
            PropertyInfo.SetValue(obj, typedValue);
            InvalidFeedback = null;
            return true;
            //}
            //catch (Exception)
            //{
            //    InvalidFeedback = "Failed to set value.";
            //    return false;
            //}
        }


    }
}
