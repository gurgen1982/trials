namespace WebApplication14.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ph1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Photos", "Desc", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Photos", "Desc");
        }
    }
}
