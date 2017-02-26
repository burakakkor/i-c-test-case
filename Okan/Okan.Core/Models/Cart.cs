using System.Collections.Generic;

namespace Okan.Core.Models
{
    public class Cart
    {
        public Cart()
        {
            Drinks = new List<CartItem>();
        }

        public int Id { get; set; }

        public IEnumerable<CartItem> Drinks { get; set; }
    }

    public class CartItem
    {
        public Drink Drink { get; set; }

        public int Count { get; set; }
    }
}
