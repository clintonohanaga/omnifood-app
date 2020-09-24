/* global $ */

/* eslint-env jquery */
   
    /* For sticky navigation */

    $(document).ready(function() {
        
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
            
        } else {
            $('nav').removeClass('sticky');
        }
        
    }, {
      offset: '60px;'
    });
    
    /* Scroll on buttons */
    
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
        
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
        
    });
    
    /* Navigation scroll */
        
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animations on Scroll */
        
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
        
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
        
    }, {
        offset: '50%'
    });
        
       
    /* mobile nav */    
        
   $('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        nav.slideToggle(200);

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('list-circle-outline') && clicked == 'logo-black')
            return;
        

        //Changes icon states of the menu button
        if($('#iconNav').attr('name')== 'list-circle-outline'){
            $('#iconNav').attr('name', 'close-outline');
            
        } else {
            $('#iconNav').attr('name', 'list-circle-outline');
        }
    });


});

    //SCROLL LINKS

    window.addEventListener('scroll',toggleIcon);

    function toggleIcon(){
        const icon = document.querySelector('#new');

        if (window.pageYOffset > 0){
            icon.style.display = 'block';

        } else {
           icon.style.display = 'none' 
        }
        
    }

    









