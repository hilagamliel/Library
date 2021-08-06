using System;
using System.Collections.Generic;
using System.Text;
using DTO;
using DAL;
namespace BLL.Cast
{
    public class BorrowerCast
    {
        public static BorrowerDTO GetBorrowerDTO(Borrower borrower)
        {
            BorrowerDTO borrowerDTO = new BorrowerDTO();
            borrowerDTO.id = borrower.Id.ToString();
            borrowerDTO.tz = borrower.Tz;
            borrowerDTO.ageCategory = borrower.CategoryId.Value;
            borrowerDTO.firstName = borrower.FirstName;
            borrowerDTO.lastName = borrower.LastName;
            borrowerDTO.mail = borrower.Mail;
            borrowerDTO.phoneNumber = borrower.PhoneNumber;
            return borrowerDTO;
        }
        public static Borrower GetBorrower(BorrowerDTO borrowerDTO)
        {
            Borrower borrower = new Borrower ();
            borrower.Id = int.Parse(borrowerDTO.id);
            borrower.Tz = borrowerDTO.tz;
            borrower.CategoryId = borrowerDTO.ageCategory;
            borrower.FirstName = borrowerDTO.firstName;
            borrower.LastName = borrowerDTO.lastName;
            borrower.Mail = borrowerDTO.mail;
            borrower.PhoneNumber = borrowerDTO.phoneNumber;
            return borrower;
        }
    }
}
