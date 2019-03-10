(function ($) {
	"use strict";
	jQuery(document).ready(function( $ ) {
		//slicknav
		//mobile menu
		var ulNav= "#menu", openNav= "activeNav";
		
		$('.toggle-menu').on('click', function(e){
			if($(ulNav).hasClass(openNav)){
				$(ulNav).removeClass(openNav);
			}else{
				$(ulNav).addClass(openNav);
			}
			e.preventDefault();
		});
		
		//particles js
		particlesJS.load('#particles-js', 'particles.json', function(){
		  console.log('particles.js loaded - callback');
		});
	
		 // Onepage Active 		
		$('.nav-list').onePageNav({
			currentClass : 'active',
			scrollSpeed : 1200,
			filter: ':not(.url)'
		});
		  
	
		//skill progressbar
		$('#bar1').barfiller({
			barColor: '#2d3436'
		})	
		;$('#bar2').barfiller({
			barColor: '#2d3436'
		})
		;$('#bar3').barfiller({
			barColor: '#2d3436'
		});
	
	
		//Main slider
		$('.slider').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true,
		});
	
	
		//Isotope Masonry 
		var $grid = $('.all-portfolio').isotope({
			  itemSelector: '.grid-item',
			});	

		$('.portfolio-menu').on( 'click', 'a', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
		
		$('.portfolio-menu a').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});	
		
				
		//Magnific popup 
		$('.all-portfolio').each(function() {
			$(this).magnificPopup({
				delegate: 'a', // 
				type: 'image',
				gallery: {
				  enabled:true
				}
			});
		});

		//testimonial slider
		$('.testimonial').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		});
		
		//wow js
		new WOW().init();	
		
		 //typed js
		var typed = new Typed(".element", {
				strings: ["We Are Mrinali"],
				typeSpeed: 50,
				loop: !0,
				fadeOut: !0,
		});		
});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('header').addClass("sticky");
		}
		else{
			$('header').removeClass("sticky");
		}
	});
}(jQuery));