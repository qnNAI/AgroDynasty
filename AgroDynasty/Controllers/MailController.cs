using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BelPack.Controllers
{
    public class MailController : Controller
    {
        // POST: MailController/SendMail
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SendMail(string name, string phone, string email, string note)
        {
            return Ok();
        }
        
    }
}
