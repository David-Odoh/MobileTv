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
    [Route("api/Videos")]
    public class VideosController : Controller
    {
        private readonly MobiletvDbcontext context;
        private readonly IMapper mapper;

        public VideosController(MobiletvDbcontext context, IMapper mapper )
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<VideoResource>> GetVideo()
        {
            var videos = await context.Videos.ToListAsync();

            return mapper.Map<List<Video>, List<VideoResource>>(videos);
        }

        [HttpPost]
        public IActionResult Post([FromBody] VideoResource videoResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var video = mapper.Map<VideoResource, Video>(videoResource);

            if (video == null)
                return NotFound();

            var dbMessage = context.Videos.Add(video).Entity;
            context.SaveChanges();

            var result = mapper.Map<Video, VideoResource>(dbMessage);

            return Ok(result);

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteVideo(int id)
        {

            var video = context.Videos.SingleOrDefault(vid => vid.Id == id);

            if (video == null)
                return NotFound();

            context.Videos.Remove(video);
            context.SaveChanges();

            return Ok(id);
        }

        [HttpGet("{id}")]
        public IActionResult GetVideo(int id)
        {

            var video = context.Videos.SingleOrDefault(vid => vid.Id == id);

            if (video == null)
                return NotFound();

            var videoResource = mapper.Map<Video, VideoResource>(video);

            return Ok(videoResource);
        }
    }
}