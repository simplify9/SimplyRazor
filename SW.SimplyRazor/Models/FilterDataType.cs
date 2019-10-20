


using SW.Searchy;
using System;

namespace SW.SimplyRazor
{
    public static class FilterDataType
    {
        public const string String = "string";
        public const string Date = "date";
        public const string Int = "int";
        public const string Decimal = "decimal";

        public static SearchyRule[] RulesFor(string dataType)
        {
            switch (dataType)
            {
                case String:
                    {
                        return new SearchyRule[]
                        {
                            SearchyRule.EqualsTo,
                            SearchyRule.NotEqualsTo,
                            SearchyRule.Contains,
                            SearchyRule.StartsWith,
                        };
                    }
                case Int:
                case Decimal:
                    {
                        return new SearchyRule[]
                        {
                            SearchyRule.EqualsTo,
                            SearchyRule.NotEqualsTo,
                            SearchyRule.LessThan,
                            SearchyRule.LessThanOrEquals,
                            SearchyRule.GreaterThan,
                            SearchyRule.GreaterThanOrEquals,

                        };
                    }
                case Date:
                    {
                        return new SearchyRule[]
                        {
                            SearchyRule.LessThan,
                            SearchyRule.LessThanOrEquals,
                            SearchyRule.GreaterThan,
                            SearchyRule.GreaterThanOrEquals,
                        };
                    }
                    //case _ : return Enum.GetValues(typeof(SearchyRule));



            }

            return null;

        }

        //        static readonly List<SimplyFilterOperator> operators = new List<SimplyFilterOperator>
        //{
        //        new SimplyFilterOperator()
        //        {
        //        Operator=SearchyRule.EqualsTo,
        //        Applicability=new[] {"decimal", "int", "string" }
        //        },
        //        new SimplyFilterOperator()
        //        {
        //        Operator=SearchyRule.NotEqualsTo,
        //        Applicability=new[] {"decimal", "int", "string" }
        //        },
        //        new SimplyFilterOperator()
        //        {
        //        Operator=SearchyRule.GreaterThan,
        //        Applicability=new[] {"date", "decimal", "int" }
        //        },
        //        new SimplyFilterOperator()
        //        {
        //        Operator=SearchyRule.GreaterThanOrEquals,
        //        Applicability=new[] {"date", "decimal", "int" }
        //        },
        //        new SimplyFilterOperator()
        //        {
        //        Operator=SearchyRule.LessThan,
        //        Applicability=new[] {"date", "decimal", "int" }
        //        },
        //        new SimplyFilterOperator()
        //        {
        //        Operator=SearchyRule.LessThanOrEquals,
        //        Applicability=new[] {"date", "decimal", "int" }
        //        },
        //        new SimplyFilterOperator()
        //        {
        //        Operator=SearchyRule.BeginsWith,
        //        Applicability=new[] {"string" }
        //        },
        //        new SimplyFilterOperator()
        //        {
        //        Operator=SearchyRule.Contains,
        //        Applicability=new[] {"string" }
        //        },
        //new SimplyFilterOperator()
        //{
        //Operator=SearchyRule.EqualsToList,
        //Applicability=new[] {SimplyFilterDefinitionType.Text }
        //},

    };


}


