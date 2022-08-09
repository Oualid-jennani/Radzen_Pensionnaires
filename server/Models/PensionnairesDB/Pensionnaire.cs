using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pensionnaires.Models.PensionnairesDb
{
  [Table("pensionnaire", Schema = "dbo")]
  public partial class Pensionnaire
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id
    {
      get;
      set;
    }


    public ICollection<Reponse> Reponses { get; set; }
    [ConcurrencyCheck]
    public string nom
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public string prenom
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public string matricule
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public string numero_identite
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public int? type_identite
    {
      get;
      set;
    }

    public Referentiel Referentiel { get; set; }
    [ConcurrencyCheck]
    public DateTime? date_naissance
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public DateTime? date_entree
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public DateTime? date_sortie
    {
      get;
      set;
    }
  }
}
