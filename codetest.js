function renderMovie(data){
    $(".infosection h1").text(data.title);
    $(".infosection p").text(data.review);
    $(".poster").attr("src", data.imgUrl);
  
    $(".infosection ul").empty();
    for(let i=0; i<data.actors.length; i++){
      $(".infosection ul").append("<li>" + data.actors[i] + "</li>");
    }
  }