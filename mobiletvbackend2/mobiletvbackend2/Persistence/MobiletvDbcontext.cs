using Microsoft.EntityFrameworkCore;
using mobiletvbackend2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mobiletvbackend2.Persistence
{
    public class MobiletvDbcontext : DbContext
    {
        public DbSet<Video> Videos { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }

        public MobiletvDbcontext(DbContextOptions<MobiletvDbcontext> options)
           : base(options)
        {
           
        }
    }
}

