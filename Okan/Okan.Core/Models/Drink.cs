using Newtonsoft.Json;

namespace Okan.Core.Models
{
    public class Drink
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }
    }
}
