using Okan.Core.Models;
using System.Threading.Tasks;

namespace Okan.Core.Repositories
{
    public interface ICartRepository
    {
        Task<Cart> GetCart();
    }
}
