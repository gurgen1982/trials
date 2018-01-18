namespace WebApplication14.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<WebApplication14.Models.Db>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(WebApplication14.Models.Db context)
        {
            context.Photos.AddOrUpdate(new Models.Photos { ID = 1, Title = "title1", Url = "/image/1.jpg", Desc = "desc1" });
            context.Photos.AddOrUpdate(new Models.Photos { ID = 2, Title = "title2", Url = "/image/2.jpg", Desc = "desc2" });
            context.Photos.AddOrUpdate(new Models.Photos { ID = 3, Title = "title3", Url = "/image/3.jpg", Desc = "desc3" });

            context.SaveChanges();
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
        }
    }
}
