using BenefitsAPIs.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BenefitsAPIs.Services
{
    public interface ICostService
    {
        public int GetBenefitCost(Employee employee);
    }
}
