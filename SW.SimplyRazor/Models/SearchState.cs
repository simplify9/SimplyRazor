//using SW.PrimitiveTypes;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;

//namespace SW.SimplyRazor
//{
//    class SearchState
//    {

//        public SearchState(int pageSize) : this(new SearchyRequest { PageSize = pageSize })
//        {
//        }

//        public SearchState(SearchyRequest searchyRequest = null)
//        {
//            Filters = new List<SimplySearchFilter>();

//            if (searchyRequest == null || searchyRequest.Conditions.Count == 0 || searchyRequest.Conditions.First().Filters.Count == 0)
//            {
//                Filters.Add(new SimplySearchFilter());
//            }
//            else
//            {
//                foreach (var filter in searchyRequest.Conditions.First().Filters)
//                {
//                    Filters.Add(new SimplySearchFilter(filter));
//                }
//            }
//        }

//        public ICollection<SimplySearchFilter> Filters { get; set; }
//    }

//    //static class SearchyRequestExtensions2
//    //{
//    //    public static ICollection<SimplySearchFilter> GetSimplySearchFilters(this SearchyRequest searchyRequest)
//    //    {
//    //        var filters = new List<SimplySearchFilter>();
//    //        //FilterSetups = new Dictionary<string, SimplySearchFilterSetup>(StringComparer.OrdinalIgnoreCase);

//    //        if (searchyRequest == null || searchyRequest.Conditions.Count == 0)
//    //        {
//    //            filters.Add(new SimplySearchFilter());
//    //        }
//    //        else
//    //        {
//    //            foreach (var filter in searchyRequest.Conditions.First().Filters)
//    //            {
//    //                filters.Add(new SimplySearchFilter(filter));
//    //            }
//    //        }

//    //        return filters;
//    //    }

//    //    //public ICollection<SimplySearchFilter> Filters { get; set; }
//    //}

//}
