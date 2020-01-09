$(document).ready(function(){
	
	function Constructor(){
		if ( $('.constructor-elements').find('li.active').length ){
			var el = $('.constructor-elements').find('li.active').attr('data-el');
			var img_el = $('.constructor-elements').find('li.active').attr('data-img');
			var pic = $('.constructor-elements').find('li.active').attr('data-pic');

			if ( $(el).find('.constructor-texture').length ){
				var texture = $(el).find('.constructor-texture').find('li.active').attr('data-texture');
				var img_texture = $(el).find('.constructor-texture').find('li.active').attr('data-img');
				var img_color = $(el).find(texture).find('li.active').attr('data-img');
				src = 'i/'+img_el+'-'+img_texture+'-'+img_color+'.png';
			} else {
				var img_color = $(el).find('.constructor-colors').find('li.active').attr('data-img');
				src = 'i/'+img_el+'-'+img_color+'.png';
			}
			$('.constructor-image').find(pic).attr('src',src);
		} else {
			$('.constructor-elements').find('li').each(function(){
				var el = $(this).attr('data-el');
				var img_el = $(this).attr('data-img');
				var pic = $(this).attr('data-pic');
				var src = '';

				if ( $(el).find('.constructor-texture').length ){
					var texture = $(el).find('.constructor-texture').find('li.active').attr('data-texture');
					var img_texture = $(el).find('.constructor-texture').find('li.active').attr('data-img');
					var img_color = $(el).find(texture).find('li.active').attr('data-img');
					src = 'i/'+img_el+'-'+img_texture+'-'+img_color+'.png';
				} else {
					var img_color = $(el).find('.constructor-colors').find('li.active').attr('data-img');
					src = 'i/'+img_el+'-'+img_color+'.png';
				}
				$('.constructor-image').find(pic).attr('src',src);
			});
		}
	}
	Constructor();

	$(document).on('click','.constructor-elements li',function(){
		var el = $(this).attr('data-el');
		var src = $(this).attr('data-house');
		$('.constructor-item').removeClass('active');
		$(this).parents('.constructor-elements').find('li').removeClass('active');
		$(el).addClass('active');
		$(this).addClass('active');
		$('.elements-img').attr('src',src);
		Constructor();
	});

	$(document).on('click','.constructor-texture li',function(){
		var texture = $(this).attr('data-texture');

		if ( !$(this).hasClass('active') ){
			$(this).parents('.constructor-texture').find('li').removeClass('active');
			$(this).parents('.constructor-item').find('.constructor-colors').removeClass('active');
			$(this).parents('.constructor-item').find(texture).addClass('active');
			$(this).addClass('active');
			Constructor();
		}
	});

	$(document).on('click','.constructor-colors li',function(){
		if ( !$(this).hasClass('active') ){
			$(this).parents('.constructor-colors').find('li').removeClass('active');
			$(this).addClass('active');
			Constructor();
		}
	});

	$(document).on('click','.constructor-filter-btn',function(){
		$('.constructor-left').addClass('active');
		$('body').addClass('no-scroll');
	});

	$(document).on('click','.constructor-left-btn',function(){
		$('.constructor-left').removeClass('active');
		$('body').removeClass('no-scroll');
		setTimeout(function(){
			$('body,html').animate({scrollTop: $('.constructor').offset().top - 30},500);
		},300);
	});

});