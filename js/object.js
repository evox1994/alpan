$(document).ready(function(){

	$('.b-object-slider').slick();
	$('.b-objects-slider').slick({
		slidesToShow: 9,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 8
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 7
				}
			},
			{
				breakpoint: 920,
				settings: {
					slidesToShow: 6
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	$(document).on('click','.b-object-steps li',function(){
		var el = $(this).attr('data-step');

		if ( !$(this).hasClass('active') ){
			$(this).parents('.b-object-steps').find('li').removeClass('active');
			$(el).parents('.b-object-sliders').find('.item').removeClass('active');
			$(this).addClass('active');
			$(el).addClass('active');
			$('.b-object-slider').slick('unslick');
			$('.b-object-slider').slick();	
		}
	});

});