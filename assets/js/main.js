(function ($) {
"use strict";

	// Preloader
	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	})







	$('.hamburegr-menu, .close-btn').on('click', function(){
	    $('.siderbar-menu').toggleClass('active');
	});





	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "767"
	});


	// header-sticky
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});


	// Slider Area
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.hero-slider-area:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.hero-slider-area[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: false,
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();


	// owlCarousel
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
		items:1,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	    nav:true,
		dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:3
	        },
	        992:{
	            items:5
	        }
	    }
	})


	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
		  enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


	// scrollToTop
	// $.scrollUp({
	// 	scrollName: 'scrollUp', // Element ID
	// 	topDistance: '300', // Distance from top before showing element (px)
	// 	topSpeed: 300, // Speed back to top (ms)
	// 	animation: 'fade', // Fade, slide, none
	// 	animationInSpeed: 200, // Animation in speed (ms)
	// 	animationOutSpeed: 200, // Animation out speed (ms)
	// 	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	// 	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	// });




	$(".Location").on('click', function(){
	  $(".drop-down").toggleClass("drop-down-show");
	});


	$(".Categories").on('click', function(){
	  $(".Categories-drop-down").toggleClass("drop-down-show");
	});





	//for menu active class
	$('.loc-adde ul li').on('click', function(event) {
		$(this).siblings('.libgactive').removeClass('libgactive');
		$(this).addClass('libgactive');
		event.preventDefault();
	});






	// WOW active
	new WOW().init();


})(jQuery);