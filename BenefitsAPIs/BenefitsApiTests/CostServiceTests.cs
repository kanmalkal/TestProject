using BenefitsAPIs.Controllers;
using BenefitsAPIs.Model;
using BenefitsAPIs.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;

namespace BenefitsApiTests
{
    [TestClass]
    public class CostServiceTests
    {
        ICostService costService;
        public CostServiceTests()
        {
            costService = new CostService();
        }
        [TestMethod]
        public void TestCostNullEmployee()
        {
            Employee emp = null;
          
            var cost = costService.GetBenefitCost(emp);
            Assert.AreEqual(cost, 0);
        }

        [TestMethod]

        public void TestCostWithNoDiscount()
        {
            Employee employee = new Employee()
            {
                FirstName = "Kalyani",
                LastName = "Sundarean",
                dependants = null
            };
            var cost = costService.GetBenefitCost(employee);
            Assert.AreEqual(cost, 1000);
        }

        [TestMethod]

        public void TestCostWithEmployeeDiscount()
        {
            Employee employee = new Employee()
            {
                FirstName = "AKalyani",
                LastName = "Sundarean",
                dependants = null
            };
            var cost = costService.GetBenefitCost(employee);
            Assert.AreEqual(cost, 900);
        }

        [TestMethod]

        public void TestCostWithEmployeeAndDependantDiscount()
        {
            Employee employee = new Employee()
            {
                FirstName = "AKalyani",
                LastName = "Sundarean",
                dependants = new List<Dependant>(){
                    { new Dependant(){ FirstName="ADepFirstName", LastName="DepLastName"} }
                  }
            };
            var cost = costService.GetBenefitCost(employee);
            Assert.AreEqual(cost, 1800);
        }

        [TestMethod]

        public void TestCostWithEmployeeNullFirstName()
        {
            Employee employee = new Employee()
            {
                FirstName = "",
                LastName = "Sundarean",
                dependants = null
            };
            var cost = costService.GetBenefitCost(employee);
            Assert.AreEqual(cost, 0);
        }
    }
}
