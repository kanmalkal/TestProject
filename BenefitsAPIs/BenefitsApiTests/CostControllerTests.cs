using BenefitsAPIs.Controllers;
using BenefitsAPIs.Model;
using BenefitsAPIs.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
namespace BenefitsApiTests
{
    [TestClass]
    public class CostControllerTests
    {
        [TestMethod]
        public void GetCostReturnsStatic()
        {
            ICostService costService = new CostService();
            var costController = new CostController(costService);
            Employee emp = new Employee() { FirstName = "Kalyani", LastName = "Sundaresan" };
            var retcost=costController.GetCost(emp);
            Assert.AreEqual(retcost, 1000);
        }

        [TestMethod]
        public void GetCostReturnusingServiceMock()
        {
            Mock<ICostService> mockCostService = new Mock<ICostService>();
            mockCostService.Setup(x => x.GetBenefitCost(It.IsAny<Employee>())).Returns(5000);
            var costController = new CostController(mockCostService.Object);
            
            var retcost = costController.GetCost(new Employee());

            Assert.AreEqual(retcost, 5000);
        }
    }
}
