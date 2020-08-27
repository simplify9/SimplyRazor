using System;
using System.IO;
using System.Net.Http;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Http;
using SW.I18n;
using SW.CqApi;
using SW.HttpExtensions;

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
            services.AddControllers().AddJsonOptions(config =>
            {
                config.JsonSerializerOptions.PropertyNamingPolicy = null;
            });

            services.AddRazorPages();
            services.AddServerSideBlazor().AddCircuitOptions(options => { options.DetailedErrors = true; }); ;
            services.AddSingleton<WeatherForecastService>();

            services.AddI18n();
            services.AddCqApi(typeof(I18nService).Assembly, typeof(Startup).Assembly);

            services.AddSimplyRazor(config =>
            {
                config.BlobsUri = new Uri("https://localhost:5001/api/blobs/");
                config.DefaultApiClientFactory = sp =>
                {
                    return sp.GetService<SampleClient>();
                };
            });

            services.AddAuthentication().AddJwtBearer();
            services.AddApiClient<SampleClient, SampleClientOptions>(); 
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
            app.UseAuthorization();
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
