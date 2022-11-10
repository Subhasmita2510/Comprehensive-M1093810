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
    public class PaymentRollsController : ControllerBase
    {
        private readonly EmployeeDbContext _context;

        public PaymentRollsController(EmployeeDbContext context)
        {
            _context = context;
        }

        // GET: api/PaymentRolls
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PaymentRolls>>> GetPaymentRolls()
        {
            try
            {
                return await _context.PaymentRolls.ToListAsync();
            }
            catch(Exception ex) { throw ex; }
        }

        // GET: api/PaymentRolls/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PaymentRolls>> GetPaymentRolls(int id)
        {
            try
            {

                var paymentRolls = await _context.PaymentRolls.FindAsync(id);

                if (paymentRolls == null)
                {
                    return NotFound();
                }

                return paymentRolls;
            }
            catch(Exception ex) { throw ex; }
        }

        // PUT: api/PaymentRolls/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaymentRolls(int id, PaymentRolls paymentRolls)
        {
  
                if (id != paymentRolls.Id)
                {
                    return BadRequest();
                }
            
            _context.Entry(paymentRolls).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentRollsExists(id))
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

        // POST: api/PaymentRolls
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PaymentRolls>> PostPaymentRolls(PaymentRolls paymentRolls)
        {
            try
            {
                _context.PaymentRolls.Add(paymentRolls);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetPaymentRolls", new { id = paymentRolls.Id }, paymentRolls);
            }
            catch (Exception ex) { throw ex; }
        }

        // DELETE: api/PaymentRolls/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PaymentRolls>> DeletePaymentRolls(int id)
        {
            try
            {
                var paymentRolls = await _context.PaymentRolls.FindAsync(id);
                if (paymentRolls == null)
                {
                    return NotFound();
                }

                _context.PaymentRolls.Remove(paymentRolls);
                await _context.SaveChangesAsync();

                return paymentRolls;
            }
            catch (Exception ex) { throw ex; }


        }

        private bool PaymentRollsExists(int id)
        {
            return _context.PaymentRolls.Any(e => e.Id == id);
        }
    }
}
