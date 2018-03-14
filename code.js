let movieData = require("./data");
let $ = require("jquery");



function renderMovie(movie){
    $("#title").text(movieData.title);
    $("#info").text(movieData.info);
    $(".poster").attr("src", movieData.image);

    $("#actors").empty();
    for(let i=0; i<movieData.actors.length; i++)
    {
      $("#actors").append("<li>" + movieData.actors[i] + "</li>");
    }
  }



function changeStarRating(rating)
{
    $(".filled").removeClass("filled");
    console.log("ChangeRating called");
    for(let i=1; i<=rating; i++)
    {
      $("[starid=" + i + "]").addClass("filled");
    }
  }

  $(".stars").on("click", "span", function(e)
  {
      console.log("ClickEvent called");
    let star = $(e.target);

    let rating = star.attr("starid");

    changeStarRating(rating);                                
  });
  
console.log("Hej");
renderMovie(movieData);
   

