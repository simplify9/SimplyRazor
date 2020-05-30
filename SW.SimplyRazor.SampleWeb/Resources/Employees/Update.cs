using FluentValidation;
using SW.PrimitiveTypes;
using SW.SimplyRazor.SampleWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SW.SimplyRazor.SampleWeb.Resources.Employees
{

    public class Update : ICommandHandler<int, Employee>
    {
        async public Task<object> Handle(int key, Employee request)
        {
            //await Task.Delay(TimeSpan.FromSeconds(5));

            throw new SWException("Invalid employee nunmber"); 
            return null;
        }

        private class Validator : AbstractValidator<Employee>
        {
            public Validator()
            {
                RuleFor(p => p.Age).ExclusiveBetween(18, 130);
                RuleFor(p => p.Salary.Amount).GreaterThan(0).When(e => e.Salary != null);
                RuleForEach(p => p.Leaves).ChildRules(leaves =>
                {
                    leaves.RuleFor(p => p.Days).GreaterThan(0);
                }); 


            }
        }
    }
}
