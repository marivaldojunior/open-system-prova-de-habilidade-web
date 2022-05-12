using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SugestoesAPI.Data;

namespace SugestoesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SugestaosController : ControllerBase
    {
        private readonly DataContext _context;

        public SugestaosController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Sugestaos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sugestao>>> GetSugestoes()
        {
          if (_context.Sugestoes == null)
          {
              return NotFound();
          }
            return await _context.Sugestoes.ToListAsync();
        }

        // GET: api/Sugestaos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Sugestao>> GetSugestao(int id)
        {
          if (_context.Sugestoes == null)
          {
              return NotFound();
          }
            var sugestao = await _context.Sugestoes.FindAsync(id);

            if (sugestao == null)
            {
                return NotFound();
            }

            return sugestao;
        }

        // PUT: api/Sugestaos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSugestao(int id, Sugestao sugestao)
        {
            if (id != sugestao.Id)
            {
                return BadRequest();
            }

            _context.Entry(sugestao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SugestaoExists(id))
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

        // POST: api/Sugestaos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Sugestao>> PostSugestao(Sugestao sugestao)
        {
          if (_context.Sugestoes == null)
          {
              return Problem("Entity set 'DataContext.Sugestoes'  is null.");
          }
            _context.Sugestoes.Add(sugestao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSugestao", new { id = sugestao.Id }, sugestao);
        }

        // DELETE: api/Sugestaos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSugestao(int id)
        {
            if (_context.Sugestoes == null)
            {
                return NotFound();
            }
            var sugestao = await _context.Sugestoes.FindAsync(id);
            if (sugestao == null)
            {
                return NotFound();
            }

            _context.Sugestoes.Remove(sugestao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SugestaoExists(int id)
        {
            return (_context.Sugestoes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
