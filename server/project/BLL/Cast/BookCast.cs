using System;
using System.Collections.Generic;
using System.Text;
using DTO;
using DAL;
namespace BLL.Cast
{
    public class BookCast
    {
        public static BookDTO GetBookDTO(Book book)
        {
            BookDTO bookDTO = new BookDTO();
            bookDTO.ageCategory = book.CategoryId.Value;
            bookDTO.author = book.Author;
            bookDTO.id = book.Id.ToString();
            bookDTO.pageCount = book.PageCount.Value;
            bookDTO.title = book.Title;
            bookDTO.summary = book.Summary;
            return bookDTO;
        }
        public static Book GetBook(BookDTO bookDTO)
        {
            Book book = new Book();
            book.Author = bookDTO.author;
            book.CategoryId = bookDTO.ageCategory;
            book.Id =int.Parse(bookDTO.id);
            book.PageCount = bookDTO.pageCount;
            book.Summary = bookDTO.summary;
            book.Title = bookDTO.title;
            return book;
        }
    }
}
