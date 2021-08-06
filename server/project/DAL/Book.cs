using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Summary { get; set; }
        public int?  CategoryId { get; set; }
        public int? PageCount { get; set; }
        public virtual Category Category { get; set; }
        public virtual List<Lend> Lends { get; set; }
    }
}
