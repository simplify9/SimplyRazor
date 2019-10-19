using Humanizer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;


namespace SW.SimplyRazor
{
    public class FieldState : IFormField
    {
        readonly object instance;

        public FieldState(IFormField formField, object model) : this(formField, model.GetType(), model) { }
        private FieldState(IFormField formField, Type modelType, object model)
        {
            Name = formField.Name;
            Help = formField.Help;
            FormId = formField.FormId;
            ShowsOn = formField.ShowsOn;
            Editor = formField.Editor;
            Lookup = formField.Lookup;
            Text = formField.Text;

            var childModelType = modelType;
            instance = model;

            var arr = Name.Split('.');

            if (arr.Length > 1)
            {
                for (var i = 0; i < arr.Length - 1; i++)
                {
                    var pInfo = childModelType.GetProperty(arr[i]);
                    childModelType = pInfo.PropertyType;
                    if (instance != null) instance = pInfo.GetValue(instance);
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
            get => (text == null) ? Name.Humanize() : Text;
            set => text = value;
        }

        public Type Editor { get; set; }
        public FieldShowsOn ShowsOn { get; set; }
        public string Lookup { get; set; }
        public string Help { get; set; }
        //public string InputType { get; set; }
        public string InvalidFeedback { get; set; }
        public bool IsInvalid => InvalidFeedback != null;
        public object Value => instance !=null ? PropertyInfo.GetValue(instance) : null;
        public bool TrySetValue(object value)
        {
            try
            {
                //if (value==null) propertyInfo.SetValue(instance, default() );
                var typedValue = value.ConvertObjectToType(PropertyInfo.PropertyType);
                PropertyInfo.SetValue(instance, typedValue);
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
