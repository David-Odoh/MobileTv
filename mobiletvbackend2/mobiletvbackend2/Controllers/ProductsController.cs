using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mobiletvbackend2.Controllers.Resources;
using mobiletvbackend2.Models;
using mobiletvbackend2.Persistence;

namespace mobiletvbackend2.Controllers
{
    [Produces("application/json")]
    [Route("api/Products")]
    public class ProductsController : Controller
    {
        private readonly IMapper mapper;
        private readonly MobiletvDbcontext context;

        public ProductsController(IMapper mapper, MobiletvDbcontext context)
        {
            this.mapper = mapper;
            this.context = context;
        }

        public async Task<IEnumerable<ProductResource>> GetVideo()
        {
            var products = await context.Products.ToListAsync();

            return mapper.Map<List<Product>, List<ProductResource>>(products);
        }
    }
}