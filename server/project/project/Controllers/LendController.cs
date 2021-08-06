using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL;
using BLL;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Cors;

namespace project.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [EnableCors("MyLibrary")]

    public class LendController : Controller
    {
        private readonly Library library;
        private readonly CastLend Lend;

       

        public LendController(Library library, CastLend lend)
        {
            this.library = library;
            this.Lend = lend;
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BookDTO))]
        [HttpGet]
        public ActionResult<IEnumerable<LendDTO>> Get()
        {
            return Ok(Lend.GetAllLendDTO());
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BorrowerDTO))]
        [HttpGet("{LendId}")]
        public IActionResult Get(string LendId)
        {
            Lend lend = library.Lends.Find(int.Parse(LendId));
            if (lend == null)
                return NotFound();
            return Ok(Lend.GetLendCast(LendId));
        }

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BorrowerDTO))]
        [HttpPost]
        public ActionResult<LendDTO> Post(LendDTO lendDTO)
        {
            if (lendDTO == null)
                return NotFound();
            Lend lend = BLL.Cast.LendCast.GetLend(lendDTO);
            library.Lends.Add(lend);
            library.SaveChanges();
            return Ok(lend);
        }

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BorrowerDTO))]
        [HttpPut("{id}")]
        public ActionResult<LendDTO> Put(string id, LendDTO lendDTO)
        {
            if (lendDTO == null)
                return NotFound();
            if (id != lendDTO.id)
                return Conflict();
            Lend lend = BLL.Cast.LendCast.GetLend(lendDTO);
            library.Entry(lend).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            library.SaveChanges();
            return NoContent();
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Lend lend = library.Lends.Find(id);

            if (lend == null)
                return NotFound();

            library.Remove(lend);
            library.SaveChanges();
            return NoContent();
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BorrowerDTO))]
        [HttpGet("LendsListByBookId/{BookId:int}")]
        public ActionResult<IEnumerable<LendDTO>> GetBorrowersByBookId(int BookId)
        {
            return Ok(Lend.GetLendsByBookId(BookId));
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BorrowerDTO))]
        [HttpGet("LendsListByBorrowerId/{BorrowerId:int}")]
        public List<LendDTO> GetBorrowersByBorrowerId(int BorrowerId)
        {
            return Lend.GetLendsByBorrowerId(BorrowerId);
        }
    }
}
