using System.Web.Optimization;

namespace Okan.UI
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Style
            bundles
            .Add(new StyleBundle("~/Assets/css/okan")
            .Include("~/Assets/lib/bootstrap/css/bootstrap.min.css")
            .Include("~/Assets/css/main.css"));

            // Script
            bundles
            .Add(new ScriptBundle("~/Assets/js/okan")
            .Include("~/Assets/lib/jquery/jquery.slim.min.js")
            .Include("~/Assets/lib/angular/angular.min.js")
            .Include("~/Assets/lib/angular/angular-cookies.min.js")
            .Include("~/Assets/lib/tether/tether.min.js")
            .Include("~/Assets/lib/bootstrap/js/bootstrap.min.js")
            .Include("~/Assets/lib/underscore/underscore.min.js")

            .Include("~/Assets/js/okan.module.js")
            .Include("~/Assets/js/okan.constant.js")
            .Include("~/Assets/js/okan.service.js")
            .Include("~/Assets/js/okan.controller.js"));
        }
    }
}
