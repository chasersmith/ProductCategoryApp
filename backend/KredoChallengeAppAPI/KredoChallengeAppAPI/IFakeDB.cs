using KredoChallengeAppAPI.Models;

namespace KredoChallengeAppAPI
{
    public interface IFakeDB
    {
        List<CategoryModel> GetAllCategories();
        List<ProductModel> GetAllProductsByCateogryId(Guid id);
        public ProductModel GetProductById(Guid id);
    }
}
