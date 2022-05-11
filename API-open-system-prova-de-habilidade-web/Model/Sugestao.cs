using System.ComponentModel.DataAnnotations;

/// <summary>
/// Summary description for Class1
/// </summary>
public class Sugestao
{
	public int Id { get; set; }
	public string NameColaborador { get; set; } = string.Empty;
	public string comentario { get; set; } = string.Empty;
	public Departamento? Departamento { get; set; }

}
