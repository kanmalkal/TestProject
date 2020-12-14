using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BenefitsAPIs.Model
{
    public class Dependant
    {
        private string _firstName;
        public string FirstName { 
            get=>_firstName; 
            set 
            {
                _firstName = value;
                hasSpecialDiscount = (value.Substring(0,1).ToUpper() == "A" ? true : false);
            } 
        }
        public string LastName { get; set; }
        public string Relationship { get; set; }
        public int Cost { get; private set; }
        public bool hasSpecialDiscount { get; private set; }
    }
}
