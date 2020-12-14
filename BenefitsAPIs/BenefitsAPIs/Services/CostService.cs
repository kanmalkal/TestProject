using BenefitsAPIs.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BenefitsAPIs.Services
{
    public class CostService : ICostService
    {
        int baseCost = 1000;
        double discount = 0.10;
        public  int GetBenefitCost(Employee employee)
        {
            int cost = 0;

            cost = (employee?.FirstName?.Length > 0) ? CheckDiscount(employee?.FirstName) ? Calculate(true) : Calculate(false) : 0;
            if (employee.dependants != null)
            {
                foreach (Dependant d in employee.dependants)
                {
                    cost = cost + (d.hasSpecialDiscount ? (int)(baseCost * (1 - discount)) : baseCost);
                }
            }
            return cost;
        }

        private int Calculate(bool hasDiscount)
        {
            if (hasDiscount)
            {
                return (int)(baseCost * (1 - discount));
            }
            else
            {
                return baseCost;
            }
        }
        private bool CheckDiscount(string firstName)
        {
            return (firstName.Length > 0)?(firstName?.Substring(0,1).ToUpper() == "A") ? true : false : false;
        }
    }
}
