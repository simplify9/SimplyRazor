//using SW.PrimitiveTypes;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;

//namespace SW.SimplyRazor
//{
//    static class SearchyRequestExtensions
//    {
//        public static ICollection<SimplySearchFilter> SimplySearchFilters(this SearchyRequest searchyRequest)
//        {
//            var filters = new List<SimplySearchFilter>();

//            if (searchyRequest == null || searchyRequest.Conditions.Count == 0 || searchyRequest.Conditions.First().Filters.Count == 0)
//            {
//                filters.Add(new SimplySearchFilter());
//            }
//            else
//            {
//                foreach (var filter in searchyRequest.Conditions.First().Filters)
//                {
//                    filters.Add(new SimplySearchFilter(filter));
//                }
//            }

//            return filters;
//        }
//    }
//}
