using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL;
using BLL;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Cors;

namespace project.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [EnableCors("MyLibrary")]

    public class CategoryController : Controller
    {
        private readonly Library library;
        private readonly CastCategory Category;
        public CategoryController(Library library, CastCategory Category)
        {
            this.library = library;
            this.Category = Category;
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BookDTO))]
        [HttpGet]
        public ActionResult<IEnumerable<CategoryDTO>> Get()
        {
            return Ok(Category.GetAllCategoryDTO());
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BorrowerDTO))]
        [HttpGet("{CategoryId}")]
        public IActionResult Get(string CategoryId)
        {
            Category category = library.Categories.Find(int.Parse(CategoryId));
            if (CategoryId == null)
                return NotFound();
            return Ok(Category.GetCategoryCast(CategoryId));
        }

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BorrowerDTO))]
        [HttpPost]
        public ActionResult<CategoryDTO> Post(CategoryDTO CategoryDTO)
        {
            if (CategoryDTO == null)
                return NotFound();
            Category category = BLL.Cast.CategoryCast.GetCategory(CategoryDTO);
            library.Categories.Add(category);
            library.SaveChanges();
            return Ok(category);
        }

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BorrowerDTO))]
        [HttpPut("{id}")]
        public ActionResult<CategoryDTO> Put(string id, CategoryDTO CategoryDTO)
        {
            if (CategoryDTO == null)
                return NotFound();
            if (id != CategoryDTO.id)
                return Conflict();
            Category category = BLL.Cast.CategoryCast.GetCategory(CategoryDTO);
            library.Entry(category).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            library.SaveChanges();
            return NoContent();
        }
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Category category = library.Categories.Find(id);

            if (category == null)
                return NotFound();

            library.Remove(category);
            library.SaveChanges();
            return NoContent();
        }
    }
}
