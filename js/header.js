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

});