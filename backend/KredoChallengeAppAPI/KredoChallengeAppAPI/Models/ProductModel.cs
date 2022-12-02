namespace KredoChallengeAppAPI.Models
{
    public class ProductModel
    {
        public Guid ID { get; set; }
        public Guid CategoryID { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
    }
}
