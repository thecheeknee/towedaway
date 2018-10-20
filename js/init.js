var ell;

function revealContent(id){
  $('.content-wrapper').hide();
  if(document.getElementById(id)){
    $('#'+id).show();
    return true;
  }
  return false;
}

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
      scrollOffset: 50
    });

    $('#closepopup').click(function(){
      $('#weddingpopup').animate({
        'opacity':0
      },100,function(){
        $('#weddingpopup').hide();
      });
    });

    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
      dist: 0
    });

    $('.popupTrigger').click(function(e){
      ell = 'source' + e.currentTarget.id;
      if(revealContent(ell)){
        $('#weddingpopup').show().animate({
          'opacity':1
        },500);
      }else{
        M.toast({html: 'Block Not Present'})
      }
    })

    $('#venueButton').click(function(){
      window.open('https://goo.gl/maps/Q6svzLAoUvs','_blank','fullscreen=yes',true);
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
