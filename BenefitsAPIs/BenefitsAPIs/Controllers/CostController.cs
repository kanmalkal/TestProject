namespace BenefitsAPIs.Controllers
{
    using System;
    using System.Net;
    using System.Net.Http;
    using BenefitsAPIs.Model;
    using BenefitsAPIs.Services;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class CostController : ControllerBase
    {
        readonly ICostService _costService;

        public CostController(ICostService costService)
        {
            _costService = costService;
        }
        //// GET: api/<CostController>
        [HttpGet]
        public int GetCost([FromBody]Employee employee)
        {
            int Cost = _costService.GetBenefitCost(employee);
            if (Cost == 0)
            {
               throw new ApplicationException(); ;
            }
            return Cost;
        }
        [HttpPost]
        public int Post([FromBody]Employee employee)
        {
   
            if (employee == null)
            {
               throw new ArgumentNullException("employee");
            }
            else
            {
                return _costService.GetBenefitCost(employee);
            }
        }
    }
}
