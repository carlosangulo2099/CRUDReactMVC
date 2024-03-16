using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CRUDReactMVC.Server.Models;

public partial class CrudreactMvcContext : DbContext
{
    public CrudreactMvcContext()
    {
    }

    public CrudreactMvcContext(DbContextOptions<CrudreactMvcContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Contacto> Contactos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB; Database=CRUDReactMVC; Initial Catalog=CRUDReactMVC;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Contacto>(entity =>
        {
            entity.HasKey(e => e.IdContacto).HasName("PK__Contacto__4B1329C72DF176F7");

            entity.ToTable("Contacto");

            entity.Property(e => e.IdContacto).HasColumnName("idContacto");
            entity.Property(e => e.Correo)
                .HasMaxLength(100)
                .HasColumnName("correo");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .HasColumnName("nombre");
            entity.Property(e => e.Telefono)
                .HasMaxLength(50)
                .HasColumnName("telefono");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
