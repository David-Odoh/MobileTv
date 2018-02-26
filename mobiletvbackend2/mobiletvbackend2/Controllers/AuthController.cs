using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mobiletvbackend2.Controllers.Resources;
using mobiletvbackend2.Persistence;
using AutoMapper;
using mobiletvbackend2.Models;

namespace mobiletvbackend2.Controllers
{
    public class JwtPacket
    {
        public string Token { get; set; }
        public string FirstName { get; set; }
    }

    public class LoginData
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    [Produces("application/json")]
    [Route("auth")]
    public class AuthController : Controller
    {
        private readonly MobiletvDbcontext context;
        private readonly IMapper mapper;

        public AuthController(MobiletvDbcontext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginData loginData)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = context.Users.SingleOrDefault(u =>
            u.Email == loginData.Email &&
            u.Password == loginData.Password);

            if (user == null)
                return NotFound("Email or Password incorrect");

            var result = mapper.Map<User, UserResource>(user);

            return Ok(CreateJwtPacket(result));
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] UserResource userResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = mapper.Map<UserResource, User>(userResource);

            //if (user == null)          //Checking If Mapped User Object is empty
            //    return NotFound("No User Info was sent");

            var adduser = context.Users.SingleOrDefault(u =>
            u.Email == user.Email);    

            if (adduser != null)     //Confirming User does not already exit is database
                return BadRequest("This User may already exit. Try a different email");

            var addedUser = context.Users.Add(user).Entity;
            context.SaveChanges();

            var result = mapper.Map<User, UserResource>(addedUser);

            return Ok(CreateJwtPacket(result));

        }

        JwtPacket CreateJwtPacket(UserResource user)
        {
            var jwt = new JwtSecurityToken();
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return new JwtPacket() { Token = encodedJwt, FirstName = user.FirstName };
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(string id)
        {

            var user = context.Users.SingleOrDefault(u => u.Id == id);

            if (user == null)
                return NotFound("No User Info was Found");

            context.Users.Remove(user);
            context.SaveChanges();

            return Ok(id);
        }


    }
}