using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mobiletvbackend2.Models
{
    public class Video
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        [StringLength(255)]
        public string VideoUrl { get; set; }
    }
}
