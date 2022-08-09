using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pensionnaires.Models.PensionnairesDb
{
  [Table("referentiel", Schema = "dbo")]
  public partial class Referentiel
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id
    {
      get;
      set;
    }


    public ICollection<Pensionnaire> Pensionnaires { get; set; }
    [ConcurrencyCheck]
    public string cat
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public string code
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public string libelle_fr
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public string libelle_ar
    {
      get;
      set;
    }
  }
}
