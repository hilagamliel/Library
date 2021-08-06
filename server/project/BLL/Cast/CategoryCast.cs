using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using DTO;
namespace BLL.Cast
{
    public class CategoryCast
    {
        public static CategoryDTO GetCategoryDTO(Category category)
        {
            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.color = category.Color;
            categoryDTO.description = category.Description;
            categoryDTO.id = category.Id.ToString();
            categoryDTO.name = category.Name;
            return categoryDTO;
        }
        public static Category GetCategory(CategoryDTO categoryDTO)
        {
            Category category  = new Category();
            category.Color = categoryDTO.color;
            category.Description = categoryDTO.description;
            category.Id =int.Parse(categoryDTO.id);
            category.Name = categoryDTO.name;
            return category ;
        }
    }
}
