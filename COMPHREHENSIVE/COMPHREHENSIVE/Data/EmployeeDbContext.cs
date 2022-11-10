using COMPHREHENSIVE.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COMPHREHENSIVE.Data
{
    public class EmployeeDbContext:DbContext
    {
        public EmployeeDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Designation> Designations { get; set; }
        public DbSet<RequestLeave> RequestLeaves { get; set; }
        public DbSet<PaymentRolls> PaymentRolls { get; set; }
        public DbSet<TimeManagement> WorkingHours { get; set; }
    }
}
