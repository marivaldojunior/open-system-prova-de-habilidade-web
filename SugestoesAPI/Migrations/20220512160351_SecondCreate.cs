using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SugestoesAPI.Migrations
{
    public partial class SecondCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Sigra",
                table: "Departamentos",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Sigra",
                table: "Departamentos");
        }
    }
}
