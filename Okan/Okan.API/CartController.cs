using System;
using Checkout;
using Okan.API.Models.RequestModel;
using Okan.Core.Models;
using Okan.Core.Repositories;
using System.Configuration;
using System.Threading.Tasks;
using System.Web.Http;
using Environment = Checkout.Helpers.Environment;

namespace Okan.API
{
    public class CartController : ApiController
    {
        private readonly ICartRepository _cartRepository;

        public CartController(ICartRepository cartRepository)
        {
            _cartRepository = cartRepository;
        }

        public async Task<Cart> Get()
        {
            return await _cartRepository.GetCart();
        }

        public void Post([FromBody]Cart cart)
        {
            var apiClient = new APIClient(ConfigurationManager.AppSettings["Checkout.SecretKey"], Environment.Sandbox);
            var apiResponse = apiClient.ChargeService.ChargeWithCard(new CardChargeRequestModel());

            if (!apiResponse.HasError)
            {
                // apiResponse.success
            }
            else
            {
                throw new Exception();
                // apiResponse.error
            }
        }
    }
}
