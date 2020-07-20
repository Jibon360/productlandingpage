$(document).ready(function(){

        // collapse
        $(document).on("click", ".navbar-collapse.show", function (e) {
            $(e.target).is("a") && $(this).collapse("hide")
        }),    // 



    // OWL PRODUCTION
    $('#owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        dots:false,
        
        nav:true,
        autoplayTimeout:5000,
        autoplaySpeed:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },

            992:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })



    // OWL TESTI 
    $('#owl-testi').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        dots:false,
        
        nav:true,
        autoplayTimeout:2000,
        autoplaySpeed:900,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
    

});