
$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 30,
    mouseDrag:true,
    autoplay:true,
    animateOut: 'fadeOut',
    dots: true,
    navigation : false,
	navigationText : ["prev","next"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        }
         
    }
});