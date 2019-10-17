using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlazorLob3.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace BlazorLob3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LookupController : ControllerBase
    {
        readonly IServiceProvider serviceProvider;
        public LookupController(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        [HttpGet]
        public IActionResult List()
        {
            var svcsList = serviceProvider.GetServices<ILookupService>().Select(e => e.GetType().Name.Replace("LookupService", string.Empty).ToLower()); //.Select(e=> new {Instance = e ,Name = e.GetType().Name.Replace("LookupService", string.Empty) });  
            return new OkObjectResult(svcsList);
        }

        [HttpGet("{lookupServiceName}")]
        public async Task<IActionResult> Get(string lookupServiceName,
            [FromQuery(Name = "s")]string searchFor = null,
            [FromQuery(Name = "k")]string key = null)
        {



            var svcs = serviceProvider.GetServices<ILookupService>().Where(e => e.CanServe(lookupServiceName.ToLower())); //.Select(e=> new {Instance = e ,Name = e.GetType().Name.Replace("LookupService", string.Empty) });  
            if (svcs.Count() != 1) return NotFound();

            if (key == null)
            {
                return new OkObjectResult(await svcs.First().Search(lookupServiceName, searchFor));
            }
            else
            {
                return new OkObjectResult(await svcs.First().Get(lookupServiceName, key));
            }

        }
    }
}