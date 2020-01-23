using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    public class ApiResult
    {
        public bool Success { get; set; }
        public int StatusCode { get; set; }
        //public string StatusText { get; set; }
        public string Body { get; set; }
    }

    public class ApiResult<TResponse> : ApiResult
    {
        public TResponse Response { get; set; }
    }
}