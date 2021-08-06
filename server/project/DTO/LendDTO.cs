using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class LendDTO
    {
        public string id { get; set; }
        public string borrowerid { get; set; }
        public string borroweFirstname { get; set; }
        public string borroweLastname { get; set; }
        public string bookid { get; set; }
        public string bookTitle { get; set; }
        public DateTime landingDate { get; set; }
        public DateTime returnDate { get; set; }
    }
}
