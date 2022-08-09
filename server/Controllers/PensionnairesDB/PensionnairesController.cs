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

  [Route("odata/PensionnairesDB/Pensionnaires")]
  public partial class PensionnairesController : ODataController
  {
    private Data.PensionnairesDbContext context;

    public PensionnairesController(Data.PensionnairesDbContext context)
    {
      this.context = context;
    }
    // GET /odata/PensionnairesDb/Pensionnaires
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.PensionnairesDb.Pensionnaire> GetPensionnaires()
    {
      var items = this.context.Pensionnaires.AsQueryable<Models.PensionnairesDb.Pensionnaire>();
      this.OnPensionnairesRead(ref items);

      return items;
    }

    partial void OnPensionnairesRead(ref IQueryable<Models.PensionnairesDb.Pensionnaire> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("/odata/PensionnairesDB/Pensionnaires(id={id})")]
    public SingleResult<Pensionnaire> GetPensionnaire(int key)
    {
        var items = this.context.Pensionnaires.Where(i=>i.id == key);
        this.OnPensionnairesGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnPensionnairesGet(ref IQueryable<Models.PensionnairesDb.Pensionnaire> items);

    partial void OnPensionnaireDeleted(Models.PensionnairesDb.Pensionnaire item);

    [HttpDelete("/odata/PensionnairesDB/Pensionnaires(id={id})")]
    public IActionResult DeletePensionnaire(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var items = this.context.Pensionnaires
                .Where(i => i.id == key)
                .AsQueryable();

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.Pensionnaire>(Request, items);

            var itemToDelete = items.FirstOrDefault();

            if (itemToDelete == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            this.OnPensionnaireDeleted(itemToDelete);
            this.context.Pensionnaires.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnPensionnaireUpdated(Models.PensionnairesDb.Pensionnaire item);

    [HttpPut("/odata/PensionnairesDB/Pensionnaires(id={id})")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutPensionnaire(int key, [FromBody]Models.PensionnairesDb.Pensionnaire newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var items = this.context.Pensionnaires
                .Where(i => i.id == key)
                .Include(i => i.Reponses)
                .AsQueryable();

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.Pensionnaire>(Request, items);

            var itemToUpdate = items.FirstOrDefault();

            if (itemToUpdate == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            this.OnPensionnaireUpdated(newItem);
            this.context.Pensionnaires.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.Pensionnaires.Where(i => i.id == key);
            Request.QueryString = Request.QueryString.Add("$expand", "Referentiel");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("/odata/PensionnairesDB/Pensionnaires(id={id})")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchPensionnaire(int key, [FromBody]Delta<Models.PensionnairesDb.Pensionnaire> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var items = this.context.Pensionnaires.Where(i => i.id == key);

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.Pensionnaire>(Request, items);

            var itemToUpdate = items.FirstOrDefault();

            if (itemToUpdate == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            patch.Patch(itemToUpdate);

            this.OnPensionnaireUpdated(itemToUpdate);
            this.context.Pensionnaires.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.Pensionnaires.Where(i => i.id == key);
            Request.QueryString = Request.QueryString.Add("$expand", "Referentiel");
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnPensionnaireCreated(Models.PensionnairesDb.Pensionnaire item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.PensionnairesDb.Pensionnaire item)
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

            this.OnPensionnaireCreated(item);
            this.context.Pensionnaires.Add(item);
            this.context.SaveChanges();

            var key = item.id;

            var itemToReturn = this.context.Pensionnaires.Where(i => i.id == key);

            Request.QueryString = Request.QueryString.Add("$expand", "Referentiel");

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
