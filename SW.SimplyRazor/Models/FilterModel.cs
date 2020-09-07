using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SW.SimplyRazor
{
    public class FilterModel : ISearchyFilterSetup, ISearchyFilterTyped
    {

        static readonly IDictionary<string, string> RulesDictionary = new Dictionary<string, string>
        {
            {((int)SearchyRule.EqualsTo).ToString(), "=" },
            {((int)SearchyRule.NotEqualsTo).ToString(), "not" },
            {((int)SearchyRule.StartsWith).ToString(), "start" },
            {((int)SearchyRule.Contains).ToString(), "like" },
            {((int)SearchyRule.GreaterThan).ToString(), ">" },
            {((int)SearchyRule.GreaterThanOrEquals).ToString(), ">=" },
            {((int)SearchyRule.LessThan).ToString(), "<" },
            {((int)SearchyRule.LessThanOrEquals).ToString(), "<=" },
            {((int)SearchyRule.EqualsToList).ToString(), "list" },
            {((int)SearchyRule.Range).ToString(), "range" }
        };

        public FilterModel()
        {
            Rules = new List<SearchyRule>();
        }

        public object Value { get; set; }
        public SearchyRule Rule { get; set; }
        public string Type { get; set; }
        public string Text { get; set; }
        public string Field { get; set; }
        public ICollection<SearchyRule> Rules { get; set; }

        public IEnumerable<KeyValuePair<string, string>> CompactRules => 
            RulesDictionary.Where(k => Rules.Select(r => ((int)r).ToString()).Contains(k.Key));

        public bool Required { get; set; }
        public bool Default { get; set; }
        public decimal? ValueDecimal { get; set; }
        public string ValueString { get; set; }
        public DateTime? ValueDateTime { get; set; }
        public decimal[] ValueDecimalArray { get; set; }
        public string[] ValueStringArray { get; set; }
        public DateTime[] ValueDateTimeArray { get; set; }
        public DateMode DateMode { get; set; }
        public Lookup Lookup { get; set; }
        public int? TypeAhead { get; set; }
    }

}
