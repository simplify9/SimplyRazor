using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using BlazorLob3.Extensions;

namespace SW.SimplyRazor
{
    public class FieldState : IFormField
    {
        readonly object childModel;
        readonly PropertyInfo propertyInfo;

        public FieldState(IFormField formField, object model) : this(formField, model.GetType(), model) { }

        public FieldState(IFormField formField, Type modelType, object model = null)
        {

            Name = formField.Name;
            Help = formField.Help;
            FormId = formField.FormId;
            Visibility = formField.Visibility;
            Component = formField.Component;

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
                Step = "1";
                Pattern = "[0-9]{10}";
                if (Component == null) Component = typeof(FieldForText);
            }
            else if (propertyInfo.PropertyType == typeof(string))
            {
                InputType = "text";
                if (Component == null) Component = typeof(FieldForText);
            }
            else if (propertyInfo.PropertyType == typeof(bool))
            {
                //InputType = "text";
                if (Component == null) Component = typeof(FieldForBoolean);
            }
            else
            {
                InputType = "text";
            }


        }

        public string Id => $"{FormId}_{Name}".Replace(".", "_").ToLower();

        public string FormId { get; }

        public string Name { get; set; }

        string display = null;
        public string Display
        {
            get
            {
                return (display == null) ? Name : Display;
            }
            set
            {
                display = value;
            }
        }

        public Type Component { get; set; }
        public bool Readonly { get; set; }
        public FieldVisibility Visibility { get; set; }
        public string Lookup { get; set; }
        public string Help { get; set; }
        public string InputType { get; set; }
        public string Step { get; set; }
        public string Pattern { get; set; }
        public string MaxLength { get; set; }
        public string Min { get; set; }
        public string Max { get; set; }
        public string InvalidFeedback { get; set; }
        public bool IsInvalid => InvalidFeedback != null;
        public object Value => propertyInfo.GetValue(childModel);
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
