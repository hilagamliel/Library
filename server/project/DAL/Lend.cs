using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class Lend
    {
        public int Id { get; set; }
        public int BorrowerId { get; set; }
        public virtual Borrower Borrower { get; set; }
        public int BookId { get; set; }
        public virtual Book Book { get; set; }
        public DateTime LandingDate { get; set; }
        public DateTime ReturnDate { get; set; }
    }
}
