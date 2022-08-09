using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pensionnaires.Models.PensionnairesDb
{
  [Table("user", Schema = "dbo")]
  public partial class User
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
    public string user_name
    {
      get;
      set;
    }
  }
}
