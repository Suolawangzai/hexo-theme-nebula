$(function(){

  /* Drop-down menu */
  $('#menu-nav-icon').click(function(){
    $('#main-nav').slideToggle()
  })

  /* Share */
  var shares = $("#social-share").children();
  var url = shares.first().attr('data-url');
  var encodedUrl = encodeURIComponent(url)

  shares.each(function(){
     this.href += encodedUrl;
  })

  /* Gallery Display */
  // Get a list of gallery ids

  var slideIndices = {};

  var galleries = $('.gallery');
  //console.log(galleries);
  //console.log(galleries[0]);
  /*
  var numGalleries = galleries.length;
  for(var k = 0; k < numGalleries; k++){
    console.log(galleries[k]);
   slideIndices[galleries[k].attr("id")] = 1;
  }
  console.log(numGalleries);
  console.log(slideIndices);
  */

  $('.gallery').each(function(index){
    //console.log( index + ": " + $( this ).attr("id") );
    slideIndices[$(this).attr("id")] = 1;
  });
  //console.log(slideIndices);

  galleries.each(function(){
    showSlides($(this).attr("id"), 1);
  })
/*
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides() {
    showSlides(slideIndex += 1);
  }
  function minusSlides() {
    showSlides(slideIndex -= 1);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" display", "");
    }
    //console.log(slideIndex);
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " display";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
*/


  function showSlides(id, n) {
    var i;
    //var showIndex = slideIndices[id];
    galleries.each(function(){
      var that = $(this);
      if(that.attr("id") == id){
        var slides = that.find('.mySlides');
        var dots = that.find('.demo');
        var captionText = that.find('.caption');
        console.log("Slide length is " + slides.length);
        if (n > slides.length){
          slideIndices[id] = 1;
          n = 1;
        }
        if (n < 1){
          slideIndices[id] = slides.length;
          n = slides.length;
        }
        console.log("n is "+ n);
        slides.each(function(index){
          if(index == (n-1)){
            console.log("here");
            $(this).css({"display": "block"});
          }else{
            $(this).css({"display": "none"});
          }
        })
        dots.each(function(index){
          if(index == (n-1)){
            $(this).addClass("display");
          }else{
            $(this).removeClass("display");
          }
        })
        var capText = $(dots[slideIndices[id]]).attr("alt").split('/').pop().replace(/\.[^/.]+$/, "");
        captionText.html(capText);
      }
    })

/*
    var cleanId = id.replace(/\//g, "\/");
    //console.log(showIndex);
    console.log(id);
    console.log(cleanId);
    var slides = $('div[id*=' + id).find('.mySlides')
    // $("#" + cleanId + " .mySlides");
    console.log(slides);
    var dots = $('div[id*=' + id).find('.demo');
    var captionText = $('div[id*=' + id).find('.caption');
    if (n > slides.length) {slideIndics[id] = 1}
    if (n < 1) {slideIndics[id] = slides.length}
    slides.each(function(index){
      if(index == showIndex){
        $(this).css({"display": "block"});
      }else{
        $(this).css({"display": "none"});
      }
    })
    dots.each(function(index){
      if(index == showIndex){
        $(this).addClass("display");
      }else{
        $(this).removeClass("display");
      }
    })
    captionText.html($(dots[slideIndics[id]]).attr("alt"));
    */
    /*
    for (i = 0; i < slides.length; i++) {
      slides[i].css({"display": "none"});
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].removeClass("display");
    }
    slides[slideIndics[id]].css({"display": "block"});
    dots[slideIndics[id]].addClass("display");
    captionText.html(dots[slideIndics[id]].attr("alt"));
    */

  }

   /* install */
   /*
   (".gallery .prev").each(function(){
     $(this).click(function(){
       var key = $(this).attr("data-id");
       showSlides(key, slideIndices[key] -=1);
     })
   });
   (".gallery .next").each(function(){
     $(this).click(function(){
       var key = $(this).attr("data-id");
       showSlides(key, slideIndices[key] +=1);
     })
   });
*/

   $(".gallery .columns .column img").each(function(){
     $(this).click(function(){
       var key = $(this).attr("data-id");
       var num = $(this).attr("data-num");
       showSlides(key, slideIndices[key] = num);
     })
   });

   galleries.each(function(){
     $(this).find(".prev").click(function(){
       var key = $(this).attr("data-id");
       slideIndices[key] -=1;
       console.log("Index is " +  slideIndices[key]);
       showSlides(key, slideIndices[key]);
     })
   })
   galleries.each(function(){
     $(this).find(".next").click(function(){
       var key = $(this).attr("data-id");
       slideIndices[key] +=1;
       console.log("Index is " +  slideIndices[key]);
       showSlides(key, slideIndices[key]);
     })
   })
/*
   $(".gallery .prev").click(function(){
     var key = $(this).attr("data-id");
     showSlides(slideIndices[key] -=1);
   });
   $(".gallery .next").click(function(){
     var key = $(this).attr("data-id")
     showSlides(slideIndices[key] +=1);
   });
*/



})
