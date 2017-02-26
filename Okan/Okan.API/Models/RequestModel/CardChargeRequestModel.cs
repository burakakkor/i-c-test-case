using System.Collections.Generic;
using Checkout.ApiServices.Cards.RequestModels;
using Checkout.ApiServices.Charges.RequestModels;
using Checkout.ApiServices.SharedModels;

namespace Okan.API.Models.RequestModel
{
    public class CardChargeRequestModel : CardCharge
    {
        public CardChargeRequestModel()
        {
            Email = "myEmail@hotmail.com";
            AutoCapture = "Y";
            AutoCapTime = 0;
            Currency = "Usd";
            TrackId = "TRK12345";
            TransactionIndicator = "1";
            CustomerIp = "82.23.168.254";
            Description = "Ipad for Ebs travel";
            Value = "100";

            Card = new CardCreate
            {
                ExpiryMonth = "06",
                ExpiryYear = "2018",
                Cvv = "100",
                Number = "4242424242424242",
                Name = "Mehmet Ali",
                BillingDetails = new Address()
                {
                    AddressLine1 = "Flat 1",
                    AddressLine2 = "Glading Fields",
                    Postcode = "N16 2BR",
                    City = "London",
                    State = "Hackney",
                    Country = "GB",
                    Phone = new Phone()
                    {
                        CountryCode = "44",
                        Number = "203 583 44 55"
                    }
                }
            };

            Products = new List<Product>();

            ShippingDetails = new Address
            {
                AddressLine1 = "Flat 1",
                AddressLine2 = "Glading Fields",
                Postcode = "N16 2BR",
                City = "London",
                State = "Hackney",
                Country = "GB",
                Phone = new Phone()
                {
                    CountryCode = "44",
                    Number = "203 583 44 55"
                }
            };

            Metadata = new Dictionary<string, string> {{"extraInformation", "EBS travel"}};
            Udf1 = "udf1 string";
            Udf2 = "udf2 string";
            Udf3 = "udf3 string";
            Udf4 = "udf4 string";
            Udf5 = "udf5 string";
        }
    }
}
