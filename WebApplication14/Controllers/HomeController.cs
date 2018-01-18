using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication14.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Read()
        {
            var db = new Models.Db();
            var data = db.Photos.ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Update()
        {
            return null;
        }
    }
}