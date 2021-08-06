using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class BookDTO
    {
        public string id { get; set; }
        public string title { get; set; }
        public string author { get; set; }
        public string summary { get; set; }
        public int ageCategory { get; set; }
        public int pageCount { get; set; }

    }
}
