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

  [Route("odata/PensionnairesDB/Referentiels")]
  public partial class ReferentielsController : ODataController
  {
    private Data.PensionnairesDbContext context;

    public ReferentielsController(Data.PensionnairesDbContext context)
    {
      this.context = context;
    }
    // GET /odata/PensionnairesDb/Referentiels
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.PensionnairesDb.Referentiel> GetReferentiels()
    {
      var items = this.context.Referentiels.AsQueryable<Models.PensionnairesDb.Referentiel>();
      this.OnReferentielsRead(ref items);

      return items;
    }

    partial void OnReferentielsRead(ref IQueryable<Models.PensionnairesDb.Referentiel> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("/odata/PensionnairesDB/Referentiels(id={id})")]
    public SingleResult<Referentiel> GetReferentiel(int key)
    {
        var items = this.context.Referentiels.Where(i=>i.id == key);
        this.OnReferentielsGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnReferentielsGet(ref IQueryable<Models.PensionnairesDb.Referentiel> items);

    partial void OnReferentielDeleted(Models.PensionnairesDb.Referentiel item);

    [HttpDelete("/odata/PensionnairesDB/Referentiels(id={id})")]
    public IActionResult DeleteReferentiel(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var items = this.context.Referentiels
                .Where(i => i.id == key)
                .AsQueryable();

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.Referentiel>(Request, items);

            var itemToDelete = items.FirstOrDefault();

            if (itemToDelete == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            this.OnReferentielDeleted(itemToDelete);
            this.context.Referentiels.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnReferentielUpdated(Models.PensionnairesDb.Referentiel item);

    [HttpPut("/odata/PensionnairesDB/Referentiels(id={id})")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutReferentiel(int key, [FromBody]Models.PensionnairesDb.Referentiel newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var items = this.context.Referentiels
                .Where(i => i.id == key)
                .Include(i => i.Pensionnaires)
                .AsQueryable();

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.Referentiel>(Request, items);

            var itemToUpdate = items.FirstOrDefault();

            if (itemToUpdate == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            this.OnReferentielUpdated(newItem);
            this.context.Referentiels.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.Referentiels.Where(i => i.id == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("/odata/PensionnairesDB/Referentiels(id={id})")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchReferentiel(int key, [FromBody]Delta<Models.PensionnairesDb.Referentiel> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var items = this.context.Referentiels.Where(i => i.id == key);

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.Referentiel>(Request, items);

            var itemToUpdate = items.FirstOrDefault();

            if (itemToUpdate == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            patch.Patch(itemToUpdate);

            this.OnReferentielUpdated(itemToUpdate);
            this.context.Referentiels.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.Referentiels.Where(i => i.id == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnReferentielCreated(Models.PensionnairesDb.Referentiel item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.PensionnairesDb.Referentiel item)
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

            this.OnReferentielCreated(item);
            this.context.Referentiels.Add(item);
            this.context.SaveChanges();

            return Created($"odata/PensionnairesDb/Referentiels/{item.id}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
