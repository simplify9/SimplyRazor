﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SW.PrimitiveTypes;

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

            var result = new RemoteBlob
            {
                MimeType = ur.File.ContentType,
                Name = ur.File.FileName,
                Size = Convert.ToInt32(ur.File.Length),
                Location = "http://cnn.com"
            };

            using (var fs = System.IO.File.Create(filePath))
            {
                //ur.File.

                await ur.File.CopyToAsync(fs);
            };
            //return new BadRequestResult(); 
            return new OkObjectResult(result);
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
