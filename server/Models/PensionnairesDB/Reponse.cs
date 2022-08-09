using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pensionnaires.Models.PensionnairesDb
{
  [Table("reponse", Schema = "dbo")]
  public partial class Reponse
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int id
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public DateTime? date_debut
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public DateTime? date_fin
    {
      get;
      set;
    }
    [ConcurrencyCheck]
    public int? questionnare
    {
      get;
      set;
    }

    public Questionnaire Questionnaire { get; set; }
    [ConcurrencyCheck]
    public int? pensionnaire
    {
      get;
      set;
    }

    public Pensionnaire Pensionnaire1 { get; set; }
    [ConcurrencyCheck]
    public int? interviewer
    {
      get;
      set;
    }

    public User User { get; set; }
    [ConcurrencyCheck]
    public string json
    {
      get;
      set;
    }
  }
}
