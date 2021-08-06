using System;
using System.Collections.Generic;
using System.Text;
using DTO;
using DAL;
namespace BLL.Cast
{
    public class LendCast
    {
        public static LendDTO GetLendDTO(Lend lend)
        {
            LendDTO LendDTO = new LendDTO();
            LendDTO.id = lend.Id.ToString();
            LendDTO.bookid = lend.BookId.ToString();
            LendDTO.bookTitle = lend.Book.Title;
            LendDTO.borrowerid = lend.BorrowerId.ToString();
            LendDTO.borroweFirstname = lend.Borrower.FirstName;
            LendDTO.borroweLastname = lend.Borrower.LastName;
            LendDTO.landingDate = lend.LandingDate;
            LendDTO.returnDate = lend.ReturnDate;
            return LendDTO;
        }
        public static Lend GetLend(LendDTO lendDTO)
        {
            Lend  Lend  = new Lend ();
            Lend.Id =int.Parse(lendDTO.id);
            Lend.BookId =int.Parse(lendDTO.bookid);
            Lend.BorrowerId =int.Parse(lendDTO.borrowerid);
            Lend.LandingDate = lendDTO.landingDate;
            Lend.ReturnDate = lendDTO.returnDate;
            return Lend ;
        }
    }
}
