using System;
using System.Collections.Generic;
using System.Text;
using DTO;
using DAL;
using System.Linq;

namespace BLL
{
    public class Books
    {
        private readonly  Library library;
        public Books(Library l)
        {
           library = l;
        }
        public  BookDTO GetBookDTO(string id)
        {
            Book book = library.Books.Find(int.Parse(id));
            return Cast.BookCast.GetBookDTO(book);
        }
        public List<BookDTO> GetAllBookDTO()
        {
            List<BookDTO> BooksDTO = new List<BookDTO>();
            library.Books.ToList().ForEach(b => BooksDTO.Add(Cast.BookCast.GetBookDTO(b)));
            return BooksDTO;
        }
        public List<BookDTO>GetBooksByAgeCategory(int ageCategory)
        {
            List<BookDTO> books = new List<BookDTO>();
            library.Books.ToList().ForEach(b => 
            {
                if (b.CategoryId == ageCategory)
                    books.Add(Cast.BookCast.GetBookDTO(b));
            });
            return books;
        }
        public List<BookDTO> GetBooksByTitle(string Title)
        {
            List<BookDTO> books = new List<BookDTO>();
            library.Books.ToList().ForEach(b =>
            {
                if (b.Title.Contains(Title))
                    books.Add(Cast.BookCast.GetBookDTO(b));
            });
            return books;
        }
    }
}
