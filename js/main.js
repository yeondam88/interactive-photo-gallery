$(document).ready(function(){
  console.log("test....");
  $('#main-header').sticky({topSpacing:0});
  
  
  //Problem: User when clicking on image goes to a dead end
    //Solution: Create an overlay with the large image - Lightbox
    
    var $overlay = $('<div id="overlay"></div>');
    var $image = $("<img>");
    var $caption = $("<p></p>");
    var $preArrow = $("<div class='arrow-1'>&laquo</div>");
    var $nextArrow = $("<div class='arrow-2'>&raquo</div>");
    var $close = $('<button>X</button>');
    var totalImage = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg"];

    

    //An image to overlay
    $overlay.append($image);
    $overlay.append($close);
    
    
    //Add overlay  
    $("body").append($overlay);
      
      
    //A caption to overlay
    $overlay.append($caption);
    
    //An arrow to overlay
    $overlay.prepend($preArrow);
    $overlay.append($nextArrow);
    
    //1. Capture the click event on a link to an image
    $("#main-gallery a").click(function(event){
      event.preventDefault();
      var imageLocation = $(this).attr("href");
      //update overlay with the image linked in the link
      $image.attr("src", imageLocation);
      
      

      //Show the overlay.
      $overlay.show();
      
      //Get child's alt atribute and set caption
      var captionText = $(this).children("img").attr("alt");
      $caption.text(captionText);
      

      $(".arrow-1").click(function(){
        var next_src = $(this).siblings().attr("src");
        console.log(next_src);
        for(var i = 0; i<totalImage.length; i++){
          $('#overlay img').attr("src", totalImage[i]);
        }
        
      });
    
      
    });
    
    
    
    
    
      
    
      
    //3. When overlay is clicked
      //3.1 Hide the overlay
    $($close).click(function(){
      $overlay.hide();
    });  
    
  
});


    

