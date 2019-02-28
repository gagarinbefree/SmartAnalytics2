using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AccessLayer.Ef
{
    public partial class StickyDBContext : DbContext
    {
        public StickyDBContext()
        {
        }

        public StickyDBContext(DbContextOptions<StickyDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Sticker> Sticker { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.2-servicing-10034");

            modelBuilder.Entity<Sticker>(entity =>
            {
                entity.ToTable("sticker");

                entity.Property(e => e.Id)
                .HasColumnName("id")
                .ValueGeneratedOnAdd();

                entity.Property(e => e.Color)
                    .IsRequired()
                    .HasColumnName("color")
                    .HasMaxLength(50)
                    .IsUnicode(true);

                entity.Property(e => e.Date)
                    .HasColumnName("date")
                    .HasColumnType("datetime");

                entity.Property(e => e.Num)
                    .HasColumnName("num");

                entity.Property(e => e.Note)
                    .HasColumnName("note")
                    .HasMaxLength(1024)
                    .IsUnicode(true);

                entity.Property(e => e.Title)
                    .HasColumnName("title")
                    .HasMaxLength(255)
                    .IsUnicode(true);

                entity.Property(e => e.X)
                    .HasColumnName("x");

                entity.Property(e => e.Y)
                    .HasColumnName("y");
            });
        }
    }
}
