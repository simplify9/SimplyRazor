using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;

namespace SW.SimplyRazor.SampleWeb.Models 
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public bool Married { get; set; }
        public Money Salary { get; set; }
        public int EmploymentStatus { get; set; }
        public string Country { get; set; }
        public ICollection<Leave> Leaves { get; set; }
    }



    public class EmployeeValidator : AbstractValidator<Employee>
    {
        public EmployeeValidator()
        {
            RuleFor(emp => emp.LastName).NotNull().Length(1, 3);

        }
    }

    public class Money
    {
        public int Amount { get; set; }
        public string Currency { get; set; }
    }

    public class Leave
    {
        public int Days { get; set; }
        public string Reason { get; set; }
    }
}
