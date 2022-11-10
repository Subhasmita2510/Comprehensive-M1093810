using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using COMPHREHENSIVE.Data;
using COMPHREHENSIVE.Models;

namespace COMPHREHENSIVE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeManagementsController : ControllerBase
    {
        private readonly EmployeeDbContext _context;

        public TimeManagementsController(EmployeeDbContext context)
        {
            _context = context;
        }

        // GET: api/TimeManagements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TimeManagement>>> GetWorkingHours()
        {
            try
            {
                return await _context.WorkingHours.ToListAsync();
            }
            catch (Exception ex) { throw ex; }
        }

        // GET: api/TimeManagements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TimeManagement>> GetTimeManagement(int id)
        {
            try
            {
                var timeManagement = await _context.WorkingHours.FindAsync(id);

                if (timeManagement == null)
                {
                    return NotFound();
                }

                return timeManagement;
            }
            catch (Exception ex) { throw ex; }
        }

        // PUT: api/TimeManagements/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTimeManagement(int id, TimeManagement timeManagement)
        {
            if (id != timeManagement.Id)
            {
                return BadRequest();
            }

            _context.Entry(timeManagement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TimeManagementExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TimeManagements
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TimeManagement>> PostTimeManagement(TimeManagement timeManagement)
        {
            try
            {
                _context.WorkingHours.Add(timeManagement);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetTimeManagement", new { id = timeManagement.Id }, timeManagement);
            }
            catch (Exception ex) { throw ex; }
        }

        // DELETE: api/TimeManagements/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TimeManagement>> DeleteTimeManagement(int id)
        {
            try
            {
                var timeManagement = await _context.WorkingHours.FindAsync(id);
                if (timeManagement == null)
                {
                    return NotFound();
                }

                _context.WorkingHours.Remove(timeManagement);
                await _context.SaveChangesAsync();

                return timeManagement;
            }
            catch (Exception ex) { throw ex; }
        }

        private bool TimeManagementExists(int id)
        {
            return _context.WorkingHours.Any(e => e.Id == id);
        }
    }
}
