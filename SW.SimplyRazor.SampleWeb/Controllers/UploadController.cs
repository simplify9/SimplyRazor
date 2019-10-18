using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SW.SimplyRazor.SampleWeb.Controllers
{
    [Route("api/[controller]")]
    public class UploadController : Controller
    {

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost, DisableRequestSizeLimit]
        public IActionResult Upload([FromForm] UploadReuqest ur)
        {
            //ur.File.
            return new OkResult();
        }



        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }


        public class UploadReuqest
        {
            public string Id { get; set; }
            public IFormFile File { get; set; }
        }
    }
}
