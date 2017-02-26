using Newtonsoft.Json;
using Okan.Core.Models;
using Okan.Core.Repositories;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace Okan.Repository
{
    public class CartRepository : ICartRepository
    {
        private readonly Assembly _assembly;

        private const string ResourceName = "Okan.Repository.Embeds.data.json";

        public CartRepository()
        {
            _assembly = Assembly.GetExecutingAssembly();;
        }

        public async Task<Cart> GetCart()
        {
            Cart cart;

            using (var stream = _assembly.GetManifestResourceStream(ResourceName))
            using (var reader = new StreamReader(stream))
            {
                var data = await reader.ReadToEndAsync();

                dynamic stuff = JsonConvert.DeserializeObject(data);

                cart = JsonConvert.DeserializeObject<Cart>("");
            }

            return cart;
        }
    }
}
