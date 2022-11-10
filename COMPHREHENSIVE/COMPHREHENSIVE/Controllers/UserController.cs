using COMPHREHENSIVE.Data;
using COMPHREHENSIVE.Models;
using COMPHREHENSIVE.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COMPHREHENSIVE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _config;
        public readonly EmployeeDbContext _context;
        public UserController(IConfiguration config, EmployeeDbContext context)
        {
            _config = config;
            _context = context;
        }
        [AllowAnonymous]
        [HttpPost("CreateUser")]
        public IActionResult Create(User user)
        {
            try
            {
                if (_context.Users.Where(u => u.Email == user.Email).FirstOrDefault() != null)
                {
                    return Ok("Already Exists");
                }
                user.MemberSince = DateTime.Now;
                _context.Users.Add(user);
                _context.SaveChanges();
                return Ok("Success");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [AllowAnonymous]
        [HttpPost("LoginUser")]
        public IActionResult Login(Login user)
        {
            try
            {
                var userAvailable = _context.Users.Where(u => u.Email == user.Email && u.Pwd == user.Pwd).FirstOrDefault();
                if (userAvailable != null)
                {
                    return Ok(new JwtService(_config).GenerateToken(
                        userAvailable.UserID.ToString(),
                        userAvailable.FirstName,
                        userAvailable.LastName,
                        userAvailable.Email,
                        userAvailable.Mobile,
                        userAvailable.Gender
                        )
                    );
                }
                return Ok("Failure");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
