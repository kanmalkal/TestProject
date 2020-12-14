using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BenefitsAPIs.Model
{
    public class Employee
    {
        public string FirstName {get;set;}
        public string LastName { get; set; }
        public List<Dependant> dependants { get; set; }
        public int Cost { get; set; }
        public Employee()
        {
            dependants = null;
        }
    }
}
