using System;
using Microsoft.AspNetCore.Mvc;

namespace Pensionnaires.Controllers
{
    public partial class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
