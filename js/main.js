var owl = $('.owl-carousel');

$(document).ready(function(){
    owl.owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        startPosition: 1,
        items: 3,
    });
  });


// Go to the next item
$('.destinations__slider-btn--prev').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.destinations__slider-btn--next').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})