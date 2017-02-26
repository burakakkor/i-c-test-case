using Okan.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Okan.Core.Repositories
{
    public interface IDrinkRepository
    {
        Task<IEnumerable<Drink>> GetDrinks();
    }
}
