﻿ $(function(){
 	console.log('a');
	$('.bl1').removeClass('active');
 	$(window).scroll(function() {
 		//lay vi tri hien tai 
 		locationNow = $('html, body').scrollTop();
 		if(locationNow > 350) {
 			$('.top-menu.fixed-top').addClass('changecolor')
 		} else {
 			$('.top-menu.fixed-top').removeClass('changecolor')
 		}
 	})

 	//Ham click to scroll block 
 	$('.bl1').click(function() {
 		$("html, body").animate({ scrollTop: $('#home-page').offset().top }, 600);
    	return false;
 	})
 	$('.bl2').click(function() {
 		$("html, body").animate({ scrollTop: $('#about-me').offset().top }, 600);
    	return false;
 	})
 	$('.bl3').click(function() {
 		$('html, body').animate({scrollTop:$('#my-skills').offset().top}, 600);
 		return false;
 	})
 	$('.bl4').click(function() {
 		$('html, body').animate({scrollTop:$('#my-portfolio').offset().top}, 600);
 		return false;
 	})
 	$('.bl5').click(function() {
 		$('html, body').animate({scrollTop:$('#contact-me').offset().top}, 600);
 		return false;
 	})

 	$('#popup2').popup({
	  pagecontainer: '#page',
	  escape: false,
	  transition: 'all ease-in-out .3s',
	  offsettop : 100
});

})  
 