using KredoChallengeAppAPI.Models;

namespace KredoChallengeAppAPI
{
    // In-Memory Database to act as mock database
    public class FakeDB : IFakeDB
    {
        private List<CategoryModel> _categories;
        private List<ProductModel> _products;

        public FakeDB()
        {
            var shirtCategoryId = Guid.NewGuid();
            var hatCategoryId = Guid.NewGuid();
            var keyChainCategoryId = Guid.NewGuid();

            _categories = new List<CategoryModel>()
            {
                new CategoryModel() { ID = shirtCategoryId, Name = "Shirts" },
                new CategoryModel() { ID = hatCategoryId, Name = "Hats" },
                new CategoryModel() { ID = keyChainCategoryId, Name = "Keychains" },
            };

            _products = new List<ProductModel>()
            {
                // Shirts
                new ProductModel()
                {
                    ID = Guid.NewGuid(), CategoryID = shirtCategoryId, Name = "School Football Jersey",
                    Description = "Represent your school's football team!", Price = 19.99M
                },
                new ProductModel()
                {
                    ID = Guid.NewGuid(), CategoryID = shirtCategoryId, Name = "School Band T-Shirt",
                    Description = "Represent your school's band!", Price = 14.99M
                },

                // Hats
                new ProductModel()
                {
                    ID = Guid.NewGuid(), CategoryID = hatCategoryId, Name = "School Mascot Cap",
                    Description = "Your favorite mascot on a baseball cap", Price = 7.99M
                },
                new ProductModel()
                {
                    ID = Guid.NewGuid(), CategoryID = hatCategoryId, Name = "Winter Cap",
                    Description = "Hat to keep you warm", Price = 14.99M
                },

                // Keychains
                new ProductModel()
                {
                    ID = Guid.NewGuid(), CategoryID = keyChainCategoryId, Name = "School Mascot Keychain",
                    Description = "Your favorite mascot on a keychain!", Price = 4.99M
                },
                new ProductModel()
                {
                    ID = Guid.NewGuid(), CategoryID = keyChainCategoryId, Name = "Simple Keychain",
                    Description = "Keychain to hold your keys", Price = 1.99M
                }
            };
        }

        public List<CategoryModel> GetAllCategories()
        {
            return _categories;
        }

        public List<ProductModel> GetAllProductsByCateogryId(Guid id)
        {
            var products = _products.FindAll(x => x.CategoryID == id);
            return products;
        }

        public ProductModel GetProductById(Guid id)
        {
            var product = _products.Find(x => x.ID == id);
            return product;
        }
    }
}
