using KredoChallengeAppAPI.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace KredoChallengeAppAPI.Controllers
{
    [Route("api/category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IFakeDB _database;

        public CategoryController(FakeDB database)
        {
            _database = database;
        }

        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<CategoryModel> Get()
        {
            return _database.GetAllCategories();
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public IEnumerable<ProductModel> Get(Guid id)
        {
            return _database.GetAllProductsByCateogryId(id);
        }
    }
}
