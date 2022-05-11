using Microsoft.EntityFrameworkCore;


    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Sugestao> Sugestao { get; set; }

        public DbSet<Departamento> Departamento { get; set; }

   
    }