using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{

    public class ScopedState : IDictionary<string, object>
    {

        readonly IDictionary<string, object> entries;
        public ScopedState()
        {
            entries = new Dictionary<string, object>(StringComparer.OrdinalIgnoreCase);
        }

        public object this[string key] //{ get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        {
            get
            {
                if (entries.TryGetValue(key, out var value))
                    return value;
                return null;
            }
            set
            {
                entries[key] = value;
            }
        }


        public ICollection<string> Keys => throw new NotImplementedException();

        public ICollection<object> Values => throw new NotImplementedException();

        public int Count => throw new NotImplementedException();

        public bool IsReadOnly => throw new NotImplementedException();

        public void Add(string key, object value)
        {
            throw new NotImplementedException();
        }

        public void Add(KeyValuePair<string, object> item)
        {
            throw new NotImplementedException();
        }

        public void Clear()
        {
            throw new NotImplementedException();
        }

        public bool Contains(KeyValuePair<string, object> item)
        {
            throw new NotImplementedException();
        }

        public bool ContainsKey(string key)
        {
            throw new NotImplementedException();
        }

        public void CopyTo(KeyValuePair<string, object>[] array, int arrayIndex)
        {
            throw new NotImplementedException();
        }

        public IEnumerator<KeyValuePair<string, object>> GetEnumerator()
        {
            throw new NotImplementedException();
        }

        public bool Remove(string key)
        {
            throw new NotImplementedException();
        }

        public bool Remove(KeyValuePair<string, object> item)
        {
            throw new NotImplementedException();
        }

        public bool TryGetValue(string key, out object value)
        {
            throw new NotImplementedException();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            throw new NotImplementedException();
        }
    }
    //public class ScopedState
    //{
    //    readonly IDictionary<string, object> entries;
    //    public ScopedState()
    //    {
    //        entries = new Dictionary<string, object>(StringComparer.OrdinalIgnoreCase);
    //    }

    //    public void Set(string key, object value)
    //    {
    //        entries[key] = value;
    //    }

    //    public object GetOrDefault(string key, object defaultValue = null)
    //    {
    //        if (entries.TryGetValue(key, out var value))
    //            return value;
    //        return defaultValue;
    //    }

    //    public T GetOrDefault<T>(string key, T defaultValue = default)
    //    {
    //        var value = GetOrDefault(key, (object)defaultValue);
    //        if (value == null) return default;
    //        return (T)value;
    //    }


    //}
}
