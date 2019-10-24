using Humanizer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;


namespace SW.SimplyRazor
{
    public class FieldState //: ISimplyField
    {
        readonly string[] nameArray;

        public FieldState(ISimplyField formField, object model) : this(formField, model.GetType())
        {
            ModelData = model;
        }
        public FieldState(ISimplyField formField, Type modelType)
        {
            //Name = formField.Name;
            //Help = formField.Help;
            //FormId = formField.FormId;
            //ShowsOn = formField.ShowsOn;
            //Editor = formField.Editor;
            //Lookup = formField.Lookup;
            //Text = formField.Text;

            ModelType = modelType;

            if (Name is null) return;

            nameArray = Name.Split('.');

            PropertyInfo = modelType.GetProperty(nameArray[0]);

            for (int i = 1; i < nameArray.Length; i++)

                PropertyInfo = PropertyInfo.PropertyType.GetProperty(nameArray[i]);


            if (PropertyInfo.PropertyType == typeof(bool))
            {
                if (Editor == null) Editor = typeof(EditorForBoolean);
            }
            else
            {
                if (Editor == null) Editor = (Lookup == null) ? typeof(EditorForText) : typeof(EditorForTextAsSelect);
            }
        }

        public dynamic ModelData { get; private set; }
        public Type ModelType { get; }

        public PropertyInfo PropertyInfo { get; }
        public string Id => $"{FormId}_{Name}".Replace(".", "_").ToLower();
        public string FormId { get; }
        //public string Name { get; set; }

        string text = null;
        public string Text
        {
            get => (text == null) ? Name?.Humanize() : Text;
            set => text = value;
        }

        //public Type Editor { get; set; }
        //public FieldShowsOn ShowsOn { get; set; }
       // public string Lookup { get; set; }
       // public string Help { get; set; }
        public string InvalidFeedback { get; set; }
        public bool IsInvalid => InvalidFeedback != null;
        public object Value
        {
            get
            {
                object obj = ModelData;

                for (int i = 0; i < nameArray.Length - 1; i++)

                    if (obj != null) obj = obj.GetType().GetProperty(nameArray[i]).GetValue(obj);

                if (obj != null) return PropertyInfo.GetValue(obj);

                return null;
            }
        }


        public bool TrySetValue(object value)
        {

            if (ModelData == null) ModelData = Activator.CreateInstance(ModelType);

            object obj = ModelData;

            for (int i = 0; i < nameArray.Length - 1; i++)
            {
                var targetProp = obj.GetType().GetProperty(nameArray[i]);
                var nextType = targetProp.PropertyType;
                var nextObj = targetProp.GetValue(obj);
                if (nextObj == null)
                {
                    nextObj = Activator.CreateInstance(nextType);
                    targetProp.SetValue(obj, nextObj);
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
