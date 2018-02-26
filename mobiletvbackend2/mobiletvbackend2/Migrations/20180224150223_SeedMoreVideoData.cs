using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace mobiletvbackend2.Migrations
{
    public partial class SeedMoreVideoData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Videos (Category, VideoUrl) VALUES ('Movie', '../assets/videos/Hola_Hola.mp4')");
            migrationBuilder.Sql("INSERT INTO Videos (Category, VideoUrl) VALUES ('Advert', '../assets/videos/Free_Tomorrow.mp4')");
            migrationBuilder.Sql("INSERT INTO Videos (Category, VideoUrl) VALUES ('Music', '../assets/videos/FF9.mp4')");
            migrationBuilder.Sql("INSERT INTO Videos (Category, VideoUrl) VALUES ('Music', '../assets/videos/Runtown.mp4')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Videos WHERE VideoUrl IN ('../assets/videos/Hola_Hola.mp4', '../assets/videos/Free_Tomorrow.mp4', '../assets/videos/FF9.mp4', '../assets/videos/Runtown.mp4')");
        }
    }
}
