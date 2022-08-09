using System;
using System.Net;
using System.Data;
using System.Linq;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Deltas;
using Microsoft.AspNetCore.OData.Formatter;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;



namespace Pensionnaires.Controllers.PensionnairesDb
{
  using Models;
  using Data;
  using Models.PensionnairesDb;

  [Route("odata/PensionnairesDB/Questionnaires")]
  public partial class QuestionnairesController : ODataController
  {
    private Data.PensionnairesDbContext context;

    public QuestionnairesController(Data.PensionnairesDbContext context)
    {
      this.context = context;
    }
    // GET /odata/PensionnairesDb/Questionnaires
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.PensionnairesDb.Questionnaire> GetQuestionnaires()
    {
      var items = this.context.Questionnaires.AsQueryable<Models.PensionnairesDb.Questionnaire>();
      this.OnQuestionnairesRead(ref items);

      return items;
    }

    partial void OnQuestionnairesRead(ref IQueryable<Models.PensionnairesDb.Questionnaire> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("/odata/PensionnairesDB/Questionnaires(id={id})")]
    public SingleResult<Questionnaire> GetQuestionnaire(int key)
    {
        var items = this.context.Questionnaires.Where(i=>i.id == key);
        this.OnQuestionnairesGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnQuestionnairesGet(ref IQueryable<Models.PensionnairesDb.Questionnaire> items);

    partial void OnQuestionnaireDeleted(Models.PensionnairesDb.Questionnaire item);

    [HttpDelete("/odata/PensionnairesDB/Questionnaires(id={id})")]
    public IActionResult DeleteQuestionnaire(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var items = this.context.Questionnaires
                .Where(i => i.id == key)
                .AsQueryable();

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.Questionnaire>(Request, items);

            var itemToDelete = items.FirstOrDefault();

            if (itemToDelete == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            this.OnQuestionnaireDeleted(itemToDelete);
            this.context.Questionnaires.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnQuestionnaireUpdated(Models.PensionnairesDb.Questionnaire item);

    [HttpPut("/odata/PensionnairesDB/Questionnaires(id={id})")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutQuestionnaire(int key, [FromBody]Models.PensionnairesDb.Questionnaire newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var items = this.context.Questionnaires
                .Where(i => i.id == key)
                .Include(i => i.Reponses)
                .AsQueryable();

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.Questionnaire>(Request, items);

            var itemToUpdate = items.FirstOrDefault();

            if (itemToUpdate == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            this.OnQuestionnaireUpdated(newItem);
            this.context.Questionnaires.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.Questionnaires.Where(i => i.id == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("/odata/PensionnairesDB/Questionnaires(id={id})")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchQuestionnaire(int key, [FromBody]Delta<Models.PensionnairesDb.Questionnaire> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var items = this.context.Questionnaires.Where(i => i.id == key);

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.Questionnaire>(Request, items);

            var itemToUpdate = items.FirstOrDefault();

            if (itemToUpdate == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            patch.Patch(itemToUpdate);

            this.OnQuestionnaireUpdated(itemToUpdate);
            this.context.Questionnaires.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.Questionnaires.Where(i => i.id == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnQuestionnaireCreated(Models.PensionnairesDb.Questionnaire item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.PensionnairesDb.Questionnaire item)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (item == null)
            {
                return BadRequest();
            }

            this.OnQuestionnaireCreated(item);
            this.context.Questionnaires.Add(item);
            this.context.SaveChanges();

            return Created($"odata/PensionnairesDb/Questionnaires/{item.id}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
