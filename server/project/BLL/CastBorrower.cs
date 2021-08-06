using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using DTO;
using System.Linq;
namespace BLL
{
    public class CastBorrower
    {
        private readonly Library library;
        public CastBorrower(Library l)
        {
            library = l;
        }
        public BorrowerDTO GetBorrowerCast(string id)
        {
            Borrower borrower = library.Borrowers.Find(int.Parse(id));
            return Cast.BorrowerCast.GetBorrowerDTO(borrower);
        }
        public List<BorrowerDTO> GetAllBorrowerDTO()
        {
            List<BorrowerDTO> borrowers = new List<BorrowerDTO>();
            library.Borrowers.ToList().ForEach(b => borrowers.Add(Cast.BorrowerCast.GetBorrowerDTO(b)));
            return borrowers;
        }
    }
}
