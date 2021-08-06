﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
        public virtual List<Book> Books { get; set; }
        public virtual List<Borrower> Borrowers { get; set; }
    }
}
