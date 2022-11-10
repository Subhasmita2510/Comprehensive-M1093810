using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace COMPHREHENSIVE.Models
{
    public class TimeManagement
    {
        [Key]
        public int Id { get; set; }
        public string Designation { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string TotalTime { get; set; }
    }
}
