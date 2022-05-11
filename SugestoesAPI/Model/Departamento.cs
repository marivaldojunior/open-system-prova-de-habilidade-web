using System.ComponentModel.DataAnnotations;

namespace SugestoesAPI.Model
{
    public class Departamento
    {
        public int Id { get; set; }

        [StringLength(30)]
        public string Nome { get; set; } = string.Empty;

    }
}