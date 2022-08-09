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

  [Route("odata/PensionnairesDB/Reponses")]
  public partial class ReponsesController : ODataController
  {
    private Data.PensionnairesDbContext context;

    public ReponsesController(Data.PensionnairesDbContext context)
    {
      this.context = context;
    }
    // GET /odata/PensionnairesDb/Reponses
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.PensionnairesDb.Reponse> GetReponses()
    {
      var items = this.context.Reponses.AsQueryable<Models.PensionnairesDb.Reponse>();
      this.OnReponsesRead(ref items);

      return items;
    }

    partial void OnReponsesRead(ref IQueryable<Models.PensionnairesDb.Reponse> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("/odata/PensionnairesDB/Reponses(id={id})")]
    public SingleResult<Reponse> GetReponse(int key)
    {
        var items = this.context.Reponses.Where(i=>i.id == key);
        this.OnReponsesGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnReponsesGet(ref IQueryable<Models.PensionnairesDb.Reponse> items);

    partial void OnReponseDeleted(Models.PensionnairesDb.Reponse item);

    [HttpDelete("/odata/PensionnairesDB/Reponses(id={id})")]
    public IActionResult DeleteReponse(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var items = this.context.Reponses
                .Where(i => i.id == key)
                .AsQueryable();

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.Reponse>(Request, items);

            var itemToDelete = items.FirstOrDefault();

            if (itemToDelete == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            this.OnReponseDeleted(itemToDelete);
            this.context.Reponses.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnReponseUpdated(Models.PensionnairesDb.Reponse item);

    [HttpPut("/odata/PensionnairesDB/Reponses(id={id})")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutReponse(int key, [FromBody]Models.PensionnairesDb.Reponse newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var items = this.context.Reponses
                .Where(i => i.id == key)
                .AsQueryable();

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.Reponse>(Request, items);

            var itemToUpdate = items.FirstOrDefault();

            if (itemToUpdate == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            this.OnReponseUpdated(newItem);
            this.context.Reponses.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.Reponses.Where(i => i.id == key);
            Request.QueryString = Request.QueryString.Add("$expand", "Questionnaire,Pensionnaire1,User");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("/odata/PensionnairesDB/Reponses(id={id})")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchReponse(int key, [FromBody]Delta<Models.PensionnairesDb.Reponse> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var items = this.context.Reponses.Where(i => i.id == key);

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.Reponse>(Request, items);

            var itemToUpdate = items.FirstOrDefault();

            if (itemToUpdate == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            patch.Patch(itemToUpdate);

            this.OnReponseUpdated(itemToUpdate);
            this.context.Reponses.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.Reponses.Where(i => i.id == key);
            Request.QueryString = Request.QueryString.Add("$expand", "Questionnaire,Pensionnaire1,User");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnReponseCreated(Models.PensionnairesDb.Reponse item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.PensionnairesDb.Reponse item)
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

            this.OnReponseCreated(item);
            this.context.Reponses.Add(item);
            this.context.SaveChanges();

            var key = item.id;

            var itemToReturn = this.context.Reponses.Where(i => i.id == key);

            Request.QueryString = Request.QueryString.Add("$expand", "Questionnaire,Pensionnaire1,User");

            return new ObjectResult(SingleResult.Create(itemToReturn))
            {
                StatusCode = 201
            };
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
