using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SugestoesAPI.Migrations
{
    public partial class AdicionandoJustificativa : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Justificativa",
                table: "Sugestoes",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Justificativa",
                table: "Sugestoes");
        }
    }
}
