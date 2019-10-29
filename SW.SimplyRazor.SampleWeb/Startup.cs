using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using BlazorLob3.Data;
using System.IO;
using Microsoft.AspNetCore.Http;

using SW.I18n;
using SW.PrimitiveTypes;
using SW.Searchy;
using SW.ModelApi;
using SW.BogusDataModels;

namespace SW.SimplyRazor.SampleWeb
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();
            services.AddServerSideBlazor().AddCircuitOptions(options => { options.DetailedErrors = true; }); ;
            services.AddSingleton<WeatherForecastService>();
            //services.AddSingleton<ILookupService, CountryLookupService>();



            services.AddI18n();
            services.AddModelApi();

            services.AddHttpClient<MapiClient<Employee>>((sp, httpClient) => 
            {
                httpClient.BaseAddress = new Uri("https://localhost:5001");
            });
            services.AddHttpClient<MapiClient<MockModel>>((sp, httpClient) =>
            {
                httpClient.BaseAddress = new Uri("https://localhost:5001");
            });
            services.AddHttpClient<MapiClient<Country>>((sp, httpClient) =>
            {
                httpClient.BaseAddress = new Uri("https://localhost:5001");
            });

            services.AddSimplyRazorServices();
            services.AddSingleton<IModelMapping>(sp => new ModelMapping<Employee>("employee"));
            services.AddSingleton<IModelMapping>(sp => new ModelMapping<MockModel>("mockmodel"));
            services.AddSingleton<IModelMapping>(sp => new ModelMapping<Country>("country"));


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapPost("/upload", async ctx =>
                {
                    var start = DateTime.Now;
                    var ms = new MemoryStream();
                    await ctx.Request.Body.CopyToAsync(ms);
                    var end = DateTime.Now;
                    await ctx.Response.WriteAsync($"Received {ms.Position} bytes in {(end - start).TotalMilliseconds} ms");
                });

                endpoints.MapBlazorHub();
                endpoints.MapControllers();
                endpoints.MapFallbackToPage("/_Host");
            });
        }
    }
}
