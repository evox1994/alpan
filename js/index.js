$(document).ready(function(){

	$('body').on('click','.b-2 .filter a',function(){
		if ( !$(this).parents('li').hasClass('active') ){
			$('.b-2 .filter li').removeClass('active');
			$(this).parents('li').addClass('active');
		}
		return false;
	});

	$('body').on('click','.mobile-filter-btn',function(){
		$(this).toggleClass('active');
		$(this).parents('.container').find('.filter').toggleClass('active');
	});

	$('.fancybox-banner').fancybox({touch: false});
	setTimeout(function(){
		$('.fancybox-banner').click();
	},100);

});