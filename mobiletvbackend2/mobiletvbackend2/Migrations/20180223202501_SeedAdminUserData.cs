using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace mobiletvbackend2.Migrations
{
    public partial class SeedAdminUserData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Users (Id, FirstName, LastName, Email, Password) VALUES ('1', 'David', 'Odoh', 'dodoh@mail.com', 'd')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Users WHERE Email IN ('dodoh@mail.com')");
        }
    }
}
