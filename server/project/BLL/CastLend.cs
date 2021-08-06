using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using DTO;
using System.Linq;
namespace BLL
{
    public class CastLend
    {
        private readonly Library library;
        public CastLend(Library l)
        {
            library = l;
        }
        public LendDTO GetLendCast(string id)
        {
            Lend lend = library.Lends.Find(int.Parse(id));
            return Cast.LendCast.GetLendDTO(lend);
        }
        public List<LendDTO> GetAllLendDTO()
        {
            List<LendDTO> Lends = new List<LendDTO>();
            library.Lends.ToList().ForEach(b => Lends.Add(Cast.LendCast.GetLendDTO(b)));
            return Lends;
        }
        public List<LendDTO>GetLendsByBookId(int id)
        {
            List<LendDTO> lendDTOs = new List<LendDTO>();
            library.Lends.ToList().ForEach(l =>
            {
                if (l.BookId == id)
                    lendDTOs.Add(Cast.LendCast.GetLendDTO(l));
            });
            return lendDTOs;
        }
        public List<LendDTO>GetLendsByBorrowerId(int id)
        {
            List<LendDTO> lendDTOs = new List<LendDTO>();
            library.Lends.ToList().ForEach(l =>
            {
                if (l.BorrowerId == id)
                    lendDTOs.Add(Cast.LendCast.GetLendDTO(l));
            });
            return lendDTOs;
        }
    }
}
