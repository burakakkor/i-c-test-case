using Okan.Core.Models;
using Okan.Core.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace Okan.API
{
    public class DrinkController : ApiController
    {
        private readonly IDrinkRepository _drinkRepository;

        public DrinkController(IDrinkRepository drinkRepository)
        {
            _drinkRepository = drinkRepository;
        }

        public async Task<IEnumerable<Drink>> Get()
        {
            return await _drinkRepository.GetDrinks();
        }
    }
}
