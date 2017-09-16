
(function ($) {
	"use strict";
    
    var $window = $(window),
            $body = $('body');
    
    jQuery(document).ready(function($){

     
    
    /*=============================
                Sticky header
    ==============================*/
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $window.on('scroll', function() {
          if ($(".navbar").offset().top > 100) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });
      
        
     /*=============================
                Smoothscroll js
        ==============================*/
        $(function() {
          $('a.smoth-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
          });
        });  
            
        
    /*======================================
        jquery scroll spy
    ========================================*/
        $body.scrollspy({
        
            target : ".navbar-collapse",
            offset : 95
        
        });
        
        
     /*=================================
            Bootstrap menu fix
     ==================================*/
        $(".navbar-toggle").on("click", function(){
        
            $body.addClass("mobile-menu-activated");
        
        });
        
        $("ul.nav.navbar-nav li a").on("click", function(){
        
            $(".navbar-collapse").removeClass("in");
        
        });
        
        
        /*====================================================
            background-image flickering solution for mobile
            =======================================================*/
             var bg = jQuery("#home");
            function resizeBackground() {
                bg.height(jQuery(window).height() + 60);
          }
          resizeBackground();
        
    
        /*==========================
            Intro typer
        ============================*/
        var element = $(".element");

            $(function() {
                element.typed({
                    strings: ["Hi there! I am Atul ", " A full stack web developer.", "Freelance coder.","Experienced manager.", "Thanks for stopping by!" ],
                    typeSpeed: 80,
                    loop: true,
                    fadeOutClass: 'typed-fade-out',
                    fadeOutDelay: 500,
                });
            });
        
        
         /*=============================
                Parallax
        ==============================*/
        $window.stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
        
        
        /*=============================
            Magnific Popup
        ==============================*/
      $('.work-popup').magnificPopup({type:'image'});
        
        
    /*=============================
            WOW js
    ==============================*/
        new WOW({ mobile: false }).init();
        
        
    /*=========================================
                jQuery mixItUp
    =======================================*/
    
    $('.work-inner').mixItUp();
    
    });
    
   
    $window.load(function(){
    /*=============================
                Preloder
    ==============================*/
         $('.spinner').fadeOut(); 
        $('.preloader').delay(350).fadeOut(500);
        $body.delay(350).css({'overflow':'visible'});

     /*=============================
               Audio Play/Mute
    ==============================*/     
    
 var audio = document.getElementById('background_audio');

document.getElementById('mute').addEventListener('click', function (e)
{   
    
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);
            
        });


    

}(jQuery));	

