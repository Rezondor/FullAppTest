using Microsoft.AspNetCore.Mvc;

namespace TestBackendDocker.Controllers;

[Route("api/users")]
[ApiController]
public class UsersController : ControllerBase
{
    [HttpGet]
    public IActionResult GetUsers()
    {
        var arr = new[]
        {
            new { Name = "Evgen"},
            new { Name = "Matve"},
        };
        return Ok(arr) ;
    }
}
