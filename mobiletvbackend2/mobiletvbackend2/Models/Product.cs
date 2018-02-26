using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mobiletvbackend2.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        [StringLength(255)]
        public string ImageUrl { get; set; }
        [Required]
        public string Caption { get; set; }
        [Required]
        public string Summary { get; set; }
    }
}
