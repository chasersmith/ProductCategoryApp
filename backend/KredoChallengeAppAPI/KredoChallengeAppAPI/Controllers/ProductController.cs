using KredoChallengeAppAPI.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace KredoChallengeAppAPI.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IFakeDB _database;

        public ProductController(FakeDB database)
        {
            _database = database;
        }

        // GET api/<ItemController>/5
        [HttpGet("{id}")]
        public ProductModel Get(Guid id)
        {
            return _database.GetProductById(id);
        }
    }
}
