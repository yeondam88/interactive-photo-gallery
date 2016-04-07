$(document).ready(function(){

  $('#main-header').sticky({topSpacing:0});
  
  
  //Problem: User when clicking on image goes to a dead end
    //Solution: Create an overlay with the large image - Lightbox
    
    var $overlay = $('<div id="overlay"></div>');
    var $image = $("<img>");
    
    $overlay.append($image);
    
    //Add overlay
    $("body").append($overlay);
      //An image
      
      //A caption
    
    
    //1. Capture the click event on a link to an image
    $("#main-gallery a").click(function(event){
      event.preventDefault();
      var imageLocation = $(this).attr("href");
      //update overlay with the image linked in the link
      $image.attr("src", imageLocation);
      
      //Show the overlay.
      $overlay.show();
      
      
      
      //Get child's alt atribute and set caption
    });
      
      
    
      
    //3. When overlay is clicked
      //3.1 Hide the overlay
      
  
  
});


    

