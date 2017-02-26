using Newtonsoft.Json;
using Okan.Core.Models;
using Okan.Core.Repositories;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace Okan.Repository
{
    public class DrinkRepository : IDrinkRepository
    {
        private readonly Assembly _assembly;

        private const string ResourceName = "Okan.Repository.Embeds.drinks.json";

        public DrinkRepository()
        {
            _assembly = Assembly.GetExecutingAssembly(); ;
        }

        public async Task<IEnumerable<Drink>> GetDrinks()
        {
            IEnumerable<Drink> drinks;

            using (var stream = _assembly.GetManifestResourceStream(ResourceName))
            using (var reader = new StreamReader(stream))
            {

                drinks = JsonConvert.DeserializeObject<IEnumerable<Drink>>(await reader.ReadToEndAsync());
            }

            return drinks;
        }
    }
}
