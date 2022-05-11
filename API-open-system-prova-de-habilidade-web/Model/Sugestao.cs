using System.ComponentModel.DataAnnotations;

public class Sugestao
{
	public int Id { get; set; }

	public string NomeColaborador { get; set; } = string.Empty;

	public string Comentario { get; set; } = string.Empty;

	public int DepartamentoId { get; set; }

	public Departamento? Departamento { get; set; }

}
