using AutoMapper;
using mobiletvbackend2.Controllers.Resources;
using mobiletvbackend2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mobiletvbackend2.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Video, VideoResource>();
            CreateMap<VideoResource, Video>();
            CreateMap<User, UserResource>();
            CreateMap<UserResource, User>();
            CreateMap<Product, ProductResource>();
            CreateMap<ProductResource, Product>();
        }
    }
}
