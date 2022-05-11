using Microsoft.EntityFrameworkCore;

namespace SugestoesAPI.Data {
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Sugestao> Sugestoes { get; set; }

        public DbSet<Departamento> Departamentos { get; set; }


    }
}