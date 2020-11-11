$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
     }, {
            offset: '60px'
    });

    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000)
    });

    // Animation site

        $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated fadeIn');
        },{
            offset: '50%'
        });

        $('.js--wp-2').waypoint(function(direction) {
            $('.js--wp-2').addClass('animated fadeInUp');
        },{
            offset: '50%'
        });

        $('.js--wp-3').waypoint(function(direction) {
            $('.js--wp-3').addClass('animated fadeIn');
        },{
            offset: '50%'
        });

        $('.js--wp-4').waypoint(function(direction) {
            $('.js--wp-4').addClass('animated pulse');
        },{
            offset: '50%'
        });

        // NAVIGATION MOBILE

        $('.mobile-nav-icon').click(function () {
            let nav = $('.js--main-nav');
            let icon = $('js--nav-icon i');
            
            nav.slideToggle(200);

            if(icon.hasClass('outline-menu')){
                icon.addClass('close-menu');
                icon.removeClass('outline-menu')
            }else {
                icon.addClass('outline-menu');
                icon.removeClass('close-menu')
            }
           
        });
});
