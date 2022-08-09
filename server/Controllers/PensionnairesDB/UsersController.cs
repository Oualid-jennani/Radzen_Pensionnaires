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

  [Route("odata/PensionnairesDB/Users")]
  public partial class UsersController : ODataController
  {
    private Data.PensionnairesDbContext context;

    public UsersController(Data.PensionnairesDbContext context)
    {
      this.context = context;
    }
    // GET /odata/PensionnairesDb/Users
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.PensionnairesDb.User> GetUsers()
    {
      var items = this.context.Users.AsQueryable<Models.PensionnairesDb.User>();
      this.OnUsersRead(ref items);

      return items;
    }

    partial void OnUsersRead(ref IQueryable<Models.PensionnairesDb.User> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("/odata/PensionnairesDB/Users(id={id})")]
    public SingleResult<User> GetUser(int key)
    {
        var items = this.context.Users.Where(i=>i.id == key);
        this.OnUsersGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnUsersGet(ref IQueryable<Models.PensionnairesDb.User> items);

    partial void OnUserDeleted(Models.PensionnairesDb.User item);

    [HttpDelete("/odata/PensionnairesDB/Users(id={id})")]
    public IActionResult DeleteUser(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var items = this.context.Users
                .Where(i => i.id == key)
                .AsQueryable();

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.User>(Request, items);

            var itemToDelete = items.FirstOrDefault();

            if (itemToDelete == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            this.OnUserDeleted(itemToDelete);
            this.context.Users.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnUserUpdated(Models.PensionnairesDb.User item);

    [HttpPut("/odata/PensionnairesDB/Users(id={id})")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutUser(int key, [FromBody]Models.PensionnairesDb.User newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var items = this.context.Users
                .Where(i => i.id == key)
                .Include(i => i.Reponses)
                .AsQueryable();

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.User>(Request, items);

            var itemToUpdate = items.FirstOrDefault();

            if (itemToUpdate == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            this.OnUserUpdated(newItem);
            this.context.Users.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.Users.Where(i => i.id == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("/odata/PensionnairesDB/Users(id={id})")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchUser(int key, [FromBody]Delta<Models.PensionnairesDb.User> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var items = this.context.Users.Where(i => i.id == key);

            items = EntityPatch.ApplyTo<Models.PensionnairesDb.User>(Request, items);

            var itemToUpdate = items.FirstOrDefault();

            if (itemToUpdate == null)
            {
                return StatusCode((int)HttpStatusCode.PreconditionFailed);
            }

            patch.Patch(itemToUpdate);

            this.OnUserUpdated(itemToUpdate);
            this.context.Users.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.Users.Where(i => i.id == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnUserCreated(Models.PensionnairesDb.User item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.PensionnairesDb.User item)
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

            this.OnUserCreated(item);
            this.context.Users.Add(item);
            this.context.SaveChanges();

            return Created($"odata/PensionnairesDb/Users/{item.id}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
