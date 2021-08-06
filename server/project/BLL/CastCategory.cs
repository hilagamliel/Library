using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using DTO;
using System.Linq;
namespace BLL
{
    public class CastCategory
    {
        private readonly Library library;
        public CastCategory(Library l)
        {
            library = l;
        }
        public CategoryDTO GetCategoryCast(string id)
        {
            Category category = library.Categories.Find(int.Parse(id));
            return Cast.CategoryCast.GetCategoryDTO(category);
        }
        public List<CategoryDTO> GetAllCategoryDTO()
        {
            List<CategoryDTO> categories = new List<CategoryDTO>();
            library.Categories.ToList().ForEach(b => categories.Add(Cast.CategoryCast.GetCategoryDTO(b)));
            return categories;
        }
    }
}
