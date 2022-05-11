using System.ComponentModel.DataAnnotations;

public class Departamento
{
    public int Id { get; set; }

    [StringLength(30)]
    public string nome { get; set; } = string.Empty;

}