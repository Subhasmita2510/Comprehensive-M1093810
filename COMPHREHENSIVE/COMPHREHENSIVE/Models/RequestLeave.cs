using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace COMPHREHENSIVE.Models
{
    public class RequestLeave
    {
        [Key]
        public int Id { get; set; }
        public string EmpName { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public string Cause { get; set; }
    }
}
