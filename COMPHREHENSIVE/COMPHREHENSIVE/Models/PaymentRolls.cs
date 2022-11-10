using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace COMPHREHENSIVE.Models
{
    public class PaymentRolls
    {
        [Key]
        public int Id { get; set; }
        public string Designation { get; set; }
        public int Salary { get; set; }
        public string Hike { get; set; }
    }
}
