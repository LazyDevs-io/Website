jQuery(function($){

$('#hamburger').click(function(){
   $(this).toggleClass('open-menu');
   $('body').find('.navtiagtion').toggleClass('slidein');
});

$('.hamburger').click(function(){
  $(this).toggleClass('open');
  $('.navigation').toggleClass('open-nav')
});; 

function headerfixed() {
    var getscrltop = $(this).scrollTop();
    if (getscrltop > 0) {
        $('body').find('.main_hdr').addClass('sticky_active');
    } else {
        $('body').find('.main_hdr').removeClass('sticky_active');
    }
}
$(window).scroll('scroll resize', headerfixed); 

$(window).on('load', function(){
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
});

});
	


	
	
	
	
	
	
	
	