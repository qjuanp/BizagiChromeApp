using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAppi.Controllers
{
    [EnableCors(origins: "http://localhost:63342/", headers: "*", methods: "*", SupportsCredentials = true)]
    
    [RoutePrefix("api/Fedex")]
    public class FedexServiceController : ApiController
    {

        // POST api/Fedex/TestRESTService
        [Route("TestRESTService")]
        public IHttpActionResult GetTestRESTService()
        {
            return Ok(new NotificationModel{
                idNotification = "02020",
                title = "Assignment",
                description = "Case : 02390238 \nTask : Onboarding \nDue Date : 10/10/2015 ",
                url = "http://www.bizagi.com",
                notificationType  = "Assignment"
            });
        }
    }


    public class NotificationModel {
        public string idNotification { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string url { get; set; }
        public string notificationType { get; set; }
    }

}
