
$('.heroSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay: true,
    animateIn: 'fadeIn',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.programeSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})