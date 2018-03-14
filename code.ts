import {movieData} from "./data";
import * as $ from "jquery";
import { Review } from "./interfaces";

function renderMovie(data: Review){
    $("#title").text(data.title);
    $("#info").text(data.info);
    $(".poster").attr("src", data.image);

    $("#actors").empty();
    for(let i=0; i<data.actors.length; i++)
    {
      $("#actors").append("<li>" + data.actors[i] + "</li>");
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
   

