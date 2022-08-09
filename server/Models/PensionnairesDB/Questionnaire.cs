using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pensionnaires.Models.PensionnairesDb
{
  [Table("questionnaire", Schema = "dbo")]
  public partial class Questionnaire
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
    public string code
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public string libelle
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public string description
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public bool? active
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public DateTime? date_creation
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public string json
    {
      get;
      set;
    }
  }
}
