$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 5000
    })
    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));        

        if (next.next().next().next().next().length > 0) { // 1-5
            next.next().children(':first-child').clone().appendTo($(this));            
            next.next().next().children(':first-child').clone().appendTo($(this));            
            next.next().next().next().children(':first-child').clone().appendTo($(this));   
            next.next().next().next().next().children(':first-child').clone().appendTo($(this));   
        }
        else if (next.next().next().next().length > 0) { // 6
            next.next().children(':first-child').clone().appendTo($(this));            
            next.next().next().children(':first-child').clone().appendTo($(this));            
            next.next().next().next().children(':first-child').clone().appendTo($(this));   
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
     
        }
        else if (next.next().next().length > 0) { // 7
            next.next().children(':first-child').clone().appendTo($(this));
            next.next().next().children(':first-child').clone().appendTo($(this));
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
            $(this).siblings(':first').next().children(':first-child').clone().appendTo($(this));
        }
        else if (next.next().length > 0) { //8
            next.next().children(':first-child').clone().appendTo($(this));
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
            $(this).siblings(':first').next().children(':first-child').clone().appendTo($(this));
            $(this).siblings(':first').next().next().children(':first-child').clone().appendTo($(this));
        }  
        else { //done
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
            $(this).siblings(':first').next().children(':first-child').clone().appendTo($(this));
            $(this).siblings(':first').next().next().children(':first-child').clone().appendTo($(this));    
            $(this).siblings(':first').next().next().next().children(':first-child').clone().appendTo($(this));    
            
        }
    });
});


(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);
function initMap() {
        var mapDiv = document.getElementById('myMap');
       var map = new google.maps.Map(mapDiv, {
            center: {lng: -80.240, lat: 25.751},
            scrollwheel: false,
            zoom: 17
        });
       
        map.set('styles', [
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "color": "#00aaff" }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "hue": "#0008ff" }
    ]
  },{
    "featureType": "road.arterial",
    "stylers": [
      { "visibility": "on" },
      { "color": "#DBE7F3" },
      { "lightness": -33 }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "color": "#B1CBC8" }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "color": "#347882" },
      { "lightness": 22 }
    ]
  },{
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#000000" }
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#000000" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#ffffff" },
      { "weight": 2 }
    ]
  },{
  },{
    "featureType": "landscape.natural.terrain",
    "stylers": [
      { "color": "#BEFE22" }
    ]
  }
]);
      }

  

