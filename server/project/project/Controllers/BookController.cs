using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using DAL;
using BLL;
using DTO;
using Microsoft.AspNetCore.Cors;

namespace project.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [EnableCors("MyLibrary")]
    public class BookController : ControllerBase
    {
        private readonly Library library;
        private readonly Books books;
        public BookController(Library library,Books  books)
        {
            this.library = library;
            this.books = books;
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK,Type =typeof(BookDTO))]
        [HttpGet("{BookId}")]
        public  IActionResult Get(string BookId)
        {
            Book book = library.Books.Find(int.Parse(BookId));
            if (book == null)
                return NotFound();
            return Ok(books.GetBookDTO(book.Id.ToString()));
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BookDTO))]
        [HttpGet]
        public ActionResult<IEnumerable<BookDTO>> Get()
        {
            return Ok(books.GetAllBookDTO());
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BookDTO))]
        [HttpGet("bookListByAge/{id:int}")]
        public ActionResult<IEnumerable<BookDTO>> GetBookByAge(int id)
        {
            if (books.GetBooksByAgeCategory(id) == null)
                return NotFound();
            return Ok(books.GetBooksByAgeCategory(id));
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BookDTO))]
        [HttpGet("bookListByName/{id}")]
        public ActionResult<IEnumerable<BookDTO>> GetBookByName(string id)
        {
            return Ok(books.GetBooksByTitle(id));
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BookDTO))]
        [HttpPost]
        public ActionResult<BookDTO> Post(BookDTO bookDTO)
        {
            if (bookDTO == null)
                return NotFound();
            library.Books.Add(BLL.Cast.BookCast.GetBook(bookDTO));
            library.SaveChanges();
            return Ok(bookDTO);
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BookDTO))]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        [HttpPut("{id}")]
        public ActionResult<BookDTO> Put(string id, BookDTO bookDTO)
        {
            if (bookDTO == null)
                return NotFound();
            if (id != bookDTO.id)
                return Conflict();
            Book book = BLL.Cast.BookCast.GetBook(bookDTO);
            library.Entry(book).State=Microsoft.EntityFrameworkCore.EntityState.Modified;
            library.SaveChanges();
            return NoContent();
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Book book = library.Books.Find(id);

            if (book == null)
                return NotFound();

            library.Remove(book);
            library.SaveChanges();
            return NoContent();
        }
    }
}
