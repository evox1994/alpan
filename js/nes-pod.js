$(document).ready(function(){

	$('body').on('click','.material-list a',function(){
		var src = $(this).attr('data-src');
		var el = $(this).attr('href');
		var btn = this;

		if ( !$(this).parents('li').hasClass('active') ){
			$('.b-3-img').animate({opacity: 0},300);
			$('.b-3-wrap .texts').animate({opacity: 0},300);
			setTimeout(function(){
				$(btn).parents('.material-list').find('li').removeClass('active');
				$(btn).parents('.text-block').find('.text').removeClass('active');
				$(btn).parents('.text-block').find('.texts').find(el).addClass('active');
				$(btn).parents('li').addClass('active');
				$('.b-3-img').attr('src',src);
				$('.b-3-img').animate({opacity: 1},300);
				$('.b-3-wrap .texts').animate({opacity: 1},300);
			},300);
		}
		return false;
	});

	$('body').on('click','.plus-minus-list a',function(){
		var el = $(this).attr('href');
		var btn = this;

		if (!$(this).parents('li').hasClass('active')) {
			$(this).parents('.item-text').find('.texts').animate({opacity: 0},300);
			setTimeout(function(){
				$(btn).parents('.plus-minus-list').find('li').removeClass('active');
				$(btn).parents('.item-text').find('.texts').find('.text').removeClass('active');
				$(btn).parents('li').addClass('active');
				$(btn).parents('.item-text').find('.texts').find(el).addClass('active');
				$(btn).parents('.item-text').find('.texts').animate({opacity: 1},300);
			},300);
		}
		return false;
	});

	$('body').on('click','.switch-img-list a',function(){
		var src = $(this).attr('href');
		var btn = this;

		if (!$(this).hasClass('active')) {
			$(this).parents('.item-image').find('.item-img').animate({opacity: 0},300);
			setTimeout(function(){
				$(btn).parents('.switch-img-list').find('li').removeClass('active');
				$(btn).parents('li').addClass('active');
				$(btn).parents('.item-image').find('.item-img').attr('src',src);
				$(btn).parents('.item-image').find('.item-img').animate({opacity: 1},300);
			},300);
		}
		return false;
	});

});