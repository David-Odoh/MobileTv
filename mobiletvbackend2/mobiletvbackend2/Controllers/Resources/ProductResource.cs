using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mobiletvbackend2.Controllers.Resources
{
    public class ProductResource
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string Caption { get; set; }
        public string Summary { get; set; }
    }
}
