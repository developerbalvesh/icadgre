$(document).ready(function(){
    $(".line3").click(function(){
        $(".menul").fadeToggle();
    })
    $("#serv").click(function(){
        $("#services").fadeToggle();
    })
})
$(document).ready(function(){
    $(".loading").slideUp(500);
  })
  

//   owl-carousel start




$(document).ready(function() {
     
    $("#owl-demo").owlCarousel({
   
        autoPlay: 3000, //Set AutoPlay to 3 seconds
   
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
   
    });
   
  });




//   owl-carousel end