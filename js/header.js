$(document).ready(function(){

	$(document).on('click','.b-mobile-btn',function(){
		$(this).toggleClass('active');
		if ( $(this).hasClass('active') ){
			$('.b-mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		} else {
			$('.b-mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		}
	});

	$(document).on('click','.b-close-btn',function(){
		$('.b-mobile-btn').removeClass('active');
		$('.b-mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$(document).on('click','.b-mobile-menu .b-nav li.li-drop span',function(){
		var eh = $(this).parents('li.li-drop').find('.b-drop-wrap').outerHeight();

		$(this).parents('li.li-drop').toggleClass('active');
		if ( $(this).parents('li.li-drop').hasClass('active') ){
			$(this).parents('li.li-drop').find('.b-drop').animate({'height':eh},300);
		} else {
			$(this).parents('li.li-drop').find('.b-drop').animate({'height':0},300);
		}
	});

	$(window).resize(function(){
		$('.b-mobile-menu .b-nav li.li-drop.active').each(function(){
			var eh = $(this).find('.b-drop-wrap').outerHeight();
			$(this).find('.b-drop').css('height',eh);
		});
	});

});