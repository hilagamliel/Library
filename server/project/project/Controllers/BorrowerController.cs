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

    public class BorrowerController : Controller
    {
        private readonly Library library;
        private readonly CastBorrower borrower;
        public BorrowerController(Library library, CastBorrower borrower)
        {
            this.library = library;
            this.borrower = borrower;
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BookDTO))]
        [HttpGet]
        public ActionResult<IEnumerable<BookDTO>> Get()
        {
            return Ok(borrower.GetAllBorrowerDTO());
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BorrowerDTO))]
        [HttpGet("{BorrowerId}")]
        public IActionResult Get(string BorrowerId)
        {
            Borrower Borrower = library.Borrowers.Find(int.Parse(BorrowerId));
            if (BorrowerId == null)
                return NotFound();
            return Ok(borrower.GetBorrowerCast(BorrowerId));
        }

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BorrowerDTO))]
        [HttpPost]
        public ActionResult<BorrowerDTO> Post(BorrowerDTO borrowerDTO)
        {
            if (borrowerDTO == null)
                return NotFound();
            Borrower borrower = BLL.Cast.BorrowerCast.GetBorrower(borrowerDTO);
            library.Borrowers.Add(borrower);
            library.SaveChanges();
            return Ok(borrower);
        }

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BorrowerDTO))]
        [HttpPut("{id}")]
        public ActionResult<BorrowerDTO> Put(string id, BorrowerDTO borrowerDTO)
        {
            if (borrowerDTO == null)
                return NotFound();
            if (id != borrowerDTO.id)
                return Conflict();
            Borrower borrower = BLL.Cast.BorrowerCast.GetBorrower(borrowerDTO);
            library.Entry(borrower).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            library.SaveChanges();
            return NoContent();
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Borrower borrower = library.Borrowers.Find(id);

            if (borrower == null)
                return NotFound();

            library.Remove(borrower);
            library.SaveChanges();
            return NoContent();
        }
    }
}
