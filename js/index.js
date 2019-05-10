$(document).ready(function(){

	$('body').on('click','.b-2 .filter a',function(){
		if ( !$(this).parents('li').hasClass('active') ){
			$('.b-2 .filter li').removeClass('active');
			$(this).parents('li').addClass('active');
		}
		return false;
	});

});