using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace mobiletvbackend2.Migrations
{
    public partial class SeedProductsData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Products (ImageUrl, Caption, Summary) VALUES ('http://angular-landing.mhrafi.com/assets/images/sq-10.jpg', 'Product One', 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur')");
            migrationBuilder.Sql("INSERT INTO Products (ImageUrl, Caption, Summary) VALUES ('http://angular-landing.mhrafi.com/assets/images/sq-11.jpg', 'Product Two', 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur')");
            migrationBuilder.Sql("INSERT INTO Products (ImageUrl, Caption, Summary) VALUES ('http://angular-landing.mhrafi.com/assets/images/sq-12.jpg', 'Product Three', 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur')");
            migrationBuilder.Sql("INSERT INTO Products (ImageUrl, Caption, Summary) VALUES ('http://angular-landing.mhrafi.com/assets/images/sq-13.jpg', 'Product Four', 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur')");
            migrationBuilder.Sql("INSERT INTO Products (ImageUrl, Caption, Summary) VALUES ('http://angular-landing.mhrafi.com/assets/images/sq-15.jpg', 'Product Five', 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur')");
            migrationBuilder.Sql("INSERT INTO Products (ImageUrl, Caption, Summary) VALUES ('http://angular-landing.mhrafi.com/assets/images/sq-16.jpg', 'Product Six', 'Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Products WHERE Caption IN ('Product One', 'Product Two', 'Product Three', 'Product Four', 'Product Five', 'Product Six')");
        }
    }
}


                    