$(function(){

  /* Share */
  var shares = $("#social-share").children();
  var url = shares.first().attr('data-url');
  var encodedUrl = encodeURIComponent(url)

  shares.each(function(){
     this.href += encodedUrl;
  })
   
})
