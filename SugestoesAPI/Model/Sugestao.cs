using System.ComponentModel.DataAnnotations;

namespace SugestoesAPI.Model
{
	public class Sugestao
	{
		public int Id { get; set; }

		[StringLength(50)]
		public string NomeColaborador { get; set; } = string.Empty;

		[StringLength(300)]
		public string Comentario { get; set; } = string.Empty;

		public int DepartamentoId { get; set; }

		public Departamento? Departamento { get; set; }

	}
}
