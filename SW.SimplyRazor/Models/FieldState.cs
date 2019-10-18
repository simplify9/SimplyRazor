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
        readonly object childModel;
        readonly PropertyInfo propertyInfo;

        public FieldState(IFormField formField, object model) : this(formField, model.GetType(), model) { }

        private FieldState(IFormField formField, Type modelType, object model)
        {
            Name = formField.Name;
            Help = formField.Help;
            FormId = formField.FormId;
            ShowsOn = formField.ShowsOn;
            Editor = formField.Editor;
            Lookup = formField.Lookup;   

            var childModelType = modelType;
            childModel = model;

            var arr = Name.Split('.');

            if (arr.Length > 1)
            {
                for (var i = 0; i < arr.Length - 1; i++)
                {
                    var pInfo = childModelType.GetProperty(arr[i]);
                    childModelType = pInfo.PropertyType;
                    if (childModel != null) childModel = pInfo.GetValue(childModel);
                };
                propertyInfo = childModelType.GetProperty(arr[arr.Length - 1]);

            }
            else
            {
                propertyInfo = childModelType.GetProperty(Name);
            }


            if (propertyInfo.PropertyType == typeof(int))
            {
                InputType = "number";
                //Step = "1";
                //Pattern = "[0-9]{10}";

                if (Editor == null) Editor = (Lookup == null) ? typeof(EditorForText) : typeof(EditorForTextAsSelect);
            }
            else if (propertyInfo.PropertyType == typeof(string))
            {
                InputType = "text";
                if (Editor == null) Editor = (Lookup == null) ? typeof(EditorForText) : typeof(EditorForTextAsSelect);
            }
            else if (propertyInfo.PropertyType == typeof(bool))
            {
                //InputType = "text";
                if (Editor == null) Editor = typeof(EditorForBoolean);
            }
            else
            {
                InputType = "text";
            }


        }

        public string Id => $"{FormId}_{Name}".Replace(".", "_").ToLower();

        public string FormId { get; }

        public string Name { get; set; }

        string text = null;
        public string Text
        {
            get
            {
                return (text == null) ? Name.Humanize() : Text;
            }
            set
            {
                text = value;
            }
        }

        public Type Editor { get; set; }
        //public bool Readonly { get; set; }
        public FieldShowsOn ShowsOn { get; set; }
        public string Lookup { get; set; }
        public string Help { get; set; }
        public string InputType { get; set; }
        //public string Step { get; set; }
        //public string Pattern { get; set; }
        //public string MaxLength { get; set; }
        //public string Min { get; set; }
        //public string Max { get; set; }
        public string InvalidFeedback { get; set; }
        public bool IsInvalid => InvalidFeedback != null;
        public object Value => childModel !=null ? propertyInfo.GetValue(childModel) : null;
        public bool TrySetValue(object value)
        {
            try
            {
                //if (value==null) propertyInfo.SetValue(childModel, default() );
                var typedValue = value.ConvertObjectToType(propertyInfo.PropertyType);
                propertyInfo.SetValue(childModel, typedValue);
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
