using System.Reflection;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

using Pensionnaires.Models.PensionnairesDb;

namespace Pensionnaires.Data
{
    public partial class PensionnairesDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        private readonly IHttpContextAccessor httpAccessor;

        public PensionnairesDbContext(IHttpContextAccessor httpAccessor, DbContextOptions<PensionnairesDbContext> options):base(options)
        {
            this.httpAccessor = httpAccessor;
        }

        public PensionnairesDbContext(IHttpContextAccessor httpAccessor)
        {
            this.httpAccessor = httpAccessor;
        }

        partial void OnModelBuilding(ModelBuilder builder);

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Pensionnaire>()
                  .HasOne(i => i.Referentiel)
                  .WithMany(i => i.Pensionnaires)
                  .HasForeignKey(i => i.type_identite)
                  .HasPrincipalKey(i => i.id);
            builder.Entity<Pensionnaires.Models.PensionnairesDb.Reponse>()
                  .HasOne(i => i.Questionnaire)
                  .WithMany(i => i.Reponses)
                  .HasForeignKey(i => i.questionnare)
                  .HasPrincipalKey(i => i.id);
            builder.Entity<Pensionnaires.Models.PensionnairesDb.Reponse>()
                  .HasOne(i => i.Pensionnaire1)
                  .WithMany(i => i.Reponses)
                  .HasForeignKey(i => i.pensionnaire)
                  .HasPrincipalKey(i => i.id);
            builder.Entity<Pensionnaires.Models.PensionnairesDb.Reponse>()
                  .HasOne(i => i.User)
                  .WithMany(i => i.Reponses)
                  .HasForeignKey(i => i.interviewer)
                  .HasPrincipalKey(i => i.id);


            builder.Entity<Pensionnaires.Models.PensionnairesDb.Pensionnaire>()
                  .Property(p => p.date_naissance)
                  .HasColumnType("date");

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Pensionnaire>()
                  .Property(p => p.date_entree)
                  .HasColumnType("date");

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Pensionnaire>()
                  .Property(p => p.date_sortie)
                  .HasColumnType("date");

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Questionnaire>()
                  .Property(p => p.date_creation)
                  .HasColumnType("datetime");

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Reponse>()
                  .Property(p => p.date_debut)
                  .HasColumnType("datetime");

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Reponse>()
                  .Property(p => p.date_fin)
                  .HasColumnType("datetime");

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Pensionnaire>()
                  .Property(p => p.id)
                  .HasPrecision(10, 0);

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Pensionnaire>()
                  .Property(p => p.type_identite)
                  .HasPrecision(10, 0);

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Questionnaire>()
                  .Property(p => p.id)
                  .HasPrecision(10, 0);

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Referentiel>()
                  .Property(p => p.id)
                  .HasPrecision(10, 0);

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Reponse>()
                  .Property(p => p.id)
                  .HasPrecision(10, 0);

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Reponse>()
                  .Property(p => p.questionnare)
                  .HasPrecision(10, 0);

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Reponse>()
                  .Property(p => p.pensionnaire)
                  .HasPrecision(10, 0);

            builder.Entity<Pensionnaires.Models.PensionnairesDb.Reponse>()
                  .Property(p => p.interviewer)
                  .HasPrecision(10, 0);

            builder.Entity<Pensionnaires.Models.PensionnairesDb.User>()
                  .Property(p => p.id)
                  .HasPrecision(10, 0);
            this.OnModelBuilding(builder);
        }


        public DbSet<Pensionnaires.Models.PensionnairesDb.Pensionnaire> Pensionnaires
        {
          get;
          set;
        }

        public DbSet<Pensionnaires.Models.PensionnairesDb.Questionnaire> Questionnaires
        {
          get;
          set;
        }

        public DbSet<Pensionnaires.Models.PensionnairesDb.Referentiel> Referentiels
        {
          get;
          set;
        }

        public DbSet<Pensionnaires.Models.PensionnairesDb.Reponse> Reponses
        {
          get;
          set;
        }

        public DbSet<Pensionnaires.Models.PensionnairesDb.User> Users
        {
          get;
          set;
        }
    }
}
