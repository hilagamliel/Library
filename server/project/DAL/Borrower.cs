using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class Borrower
    {
        public int Id { get; set; }
        public string Tz { get; set; }
        public int? CategoryId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Mail { get; set; }
        public virtual Category Category { get; set; }
        public virtual List<Lend> Lends { get; set; }


    }
}
