using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


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
        public async Task<IActionResult> Upload([FromForm] UploadReuqest ur)
        {
            Directory.CreateDirectory("./uploads");

            var fileId = Guid.NewGuid().ToString("N");
            var filePath = $"./uploads/{fileId}";

            await Task.Delay(TimeSpan.FromSeconds(2)); 

            using (var fs = System.IO.File.Create(filePath))
            {
                await ur.File.CopyToAsync(fs);
            };
            //return new BadRequestResult(); 
            return new OkObjectResult(fileId);
        }

        //// DELETE api/<controller>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}

        public class UploadReuqest
        {
            //public string Id { get; set; }
            public IFormFile File { get; set; }
        }
    }
}
