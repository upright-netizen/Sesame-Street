/* Author: AwesomeJS */

$('input[type=radio]').prettyCheckboxes();


jQuery(function($) {

	// Scroll to Function
	function scrollingTo(id){
		$('html,body').animate({scrollTop: ($(id).offset().top-115)},  1800, 'easeOutBack');
	}
	
	$('a[rel="slideto"]').live('click', function() {
		var target = $(this).attr('href');
		scrollingTo(target);
		return false
	});		
			
	function selectSubNavItems() { 
	
		var $services 	= $('#services').offset().top - $(window).scrollTop() - 50;
		var $work 	= $('#work').offset().top - $(window).scrollTop() - 50;
		var $about 	= $('#about').offset().top - $(window).scrollTop() - 50;
		var $hireus 	= $('#contact').offset().top - $(window).scrollTop() - 50;
		
		var $active = '#none';
		
		if($services < 100) $active = '#services';
		if($work < 100) $active = '#work';
		if($about < 100) $active = '#about';
		if($hireus < 100) $active = '#contact';
		
		$('#main-menu li').removeClass('active');
		$('#main-menu a[href=' + $active + ']').parent().addClass('active');
			
	}
	
	selectSubNavItems();
	
	$(window).scroll(function() {
		selectSubNavItems();
	});

	/* Scroll to Top */

	$(function () { // run this code on page load (AKA DOM load)
	 
		/* set variables locally for increased performance */
		var scroll_timer;
		var displayed = false;
		var $message = $('a.backtop');
		var $window = $(window);
		var top = $(document.body).children(0).position().top;
	 
		/* react to scroll event on window */
		$window.scroll(function () {
			window.clearTimeout(scroll_timer);
			scroll_timer = window.setTimeout(function () { // use a timer for performance
				if($window.scrollTop() <= top) // hide if at the top of the page
				{
					displayed = false;
					$message.fadeOut(500);
				}
				else if(displayed == false) // show if scrolling down
				{
					displayed = true;
					$message.stop(true, true).fadeIn(500).click(function () { 
						$('html, body').animate({scrollTop:0}, 'slow');
						return false;
					});
				}
			}, 100);
		});
	});		

	$("input[name='projectype']:checked").parent('.option').addClass('active');

	$("input[name='projectype']").change(function(){
		$('.option').removeClass('active');
		$(this).parent('.option').addClass('active');
	});

	(function ($) {

	  // Log all jQuery AJAX requests to Google Analytics
	  $(document).ajaxSend(function(event, xhr, settings){ 
	    if (typeof _gaq !== "undefined" && _gaq !== null) {
	      _gaq.push(['_trackPageview', settings.url]);
	    }
	  });

	})(jQuery);	

});