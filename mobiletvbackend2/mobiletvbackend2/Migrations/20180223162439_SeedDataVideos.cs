﻿using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace mobiletvbackend2.Migrations
{
    public partial class SeedDataVideos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Videos (Category, VideoUrl) VALUES ('Movie', '../assets/videos/WP2.mp4')");
            migrationBuilder.Sql("INSERT INTO Videos (Category, VideoUrl) VALUES ('Advert', '../assets/videos/Jumia.mp4')");
            migrationBuilder.Sql("INSERT INTO Videos (Category, VideoUrl) VALUES ('Music', '../assets/videos/Tiwa.mp4')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Videos WHERE VideoUrl IN ('../assets/videos/WP2.mp4', '../assets/videos/Jumia.mp4', '../assets/videos/Tiwa.mp4')");
        }
    }
}
