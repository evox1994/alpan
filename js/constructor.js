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

	setTimeout(function(){
		$('.constructor-image-load').removeClass('active');
		$('.constructor-image').removeClass('active');
		scrollImage();
	},5000);

	$(document).on('click','.constructor-elements-text',function(){
		$(this).parents('.constructor-elements-wrap').toggleClass('active');
	});

	$(document).on('click','.constructor-texture-text',function(){
		$(this).parents('.constructor-texture-wrap').toggleClass('active');
	});

	$(document).on('click',function(e){
		var container = $('.constructor-elements-wrap');
		var container2 = $('.constructor-texture-wrap');
		if (container.has(e.target).length === 0) {
			$('.constructor-elements-wrap').removeClass('active');
		}
		if (container2.has(e.target).length === 0) {
			$('.constructor-texture-wrap').removeClass('active');
		}
	});

	$(document).on('click','.constructor-elements li',function(){
		var el = $(this).attr('data-el');
		var src = $(this).attr('data-house');
		var text = $(this).find('span').text();
		$('.constructor-item').removeClass('active');
		$(this).parents('.constructor-elements').find('li').removeClass('active');
		$(el).addClass('active');
		$(this).addClass('active');
		$('.elements-img').attr('src',src);
		$(this).parents('.constructor-elements-wrap').removeClass('active');
		$(this).parents('.constructor-elements-wrap').find('.constructor-elements-text span').text(text);
		Constructor();
	});

	$(document).on('click','.constructor-texture li',function(){
		var texture = $(this).attr('data-texture');
		var text = $(this).find('span').text();

		if ( !$(this).hasClass('active') ){
			$(this).parents('.constructor-texture').find('li').removeClass('active');
			$(this).parents('.constructor-item').find('.constructor-colors').removeClass('active');
			$(this).parents('.constructor-item').find(texture).addClass('active');
			$(this).addClass('active');
			$(this).parents('.constructor-texture-wrap').removeClass('active');
			$(this).parents('.constructor-texture-wrap').find('.constructor-texture-text span').text(text);
			Constructor();
		}
	});

	$(document).on('click','.constructor-colors li',function(){
		if ( !$(this).hasClass('active') ){
			var color = $(this).attr('data-color');
			$(this).parents('.constructor-item').find('.constructor-colors').find('li').removeClass('active');
			$(this).parents('.constructor-item').find('.constructor-colors').find('li[data-color='+color+']').addClass('active');
			Constructor();
		}
	});

	/*$(document).on('click','.constructor-filter-btn',function(){
		$('.constructor-left').addClass('active');
		$('body').addClass('no-scroll');
	});

	$(document).on('click','.constructor-left-btn',function(){
		$('.constructor-left').removeClass('active');
		$('body').removeClass('no-scroll');
		setTimeout(function(){
			$('body,html').animate({scrollTop: $('.constructor').offset().top - 30},500);
		},300);
	});*/

	function scrollImage(){
		if ( $(window).width() > 768 ){
			var ih = $('.constructor-right').outerHeight();
			var st = $(window).scrollTop();
			var vg = $('.constructor').offset().top - 30;
			var ng = vg + $('.constructor').outerHeight() - $('.constructor-right').outerHeight();

			$('.constructor').css('min-height',ih);
			if ( st > vg ) {
				if ( st > ng ) {
					$('.constructor-right').removeClass('scroll');
					$('.constructor-right').addClass('bottom');
				} else {
					$('.constructor-right').addClass('scroll');
					$('.constructor-right').removeClass('bottom');
				}
			} else {
				$('.constructor-right').removeClass('scroll');
				$('.constructor-right').removeClass('bottom');
			}
		} else {
			$('.constructor').css('min-height','auto');
			$('.constructor-right').removeClass('scroll');
			$('.constructor-right').removeClass('bottom');
		}
	}
	scrollImage();

	$(window).on('scroll',function(){
		scrollImage();
	});

	$(window).resize(function(){
		scrollImage();
	});

});