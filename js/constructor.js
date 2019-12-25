$(document).ready(function(){
	$(document).on('click','.swap-a',function(){
		var src = $(this).attr('href');
		var el = $(this).attr('data-img');
		$(this).parents('.constructor-block').find(el).attr('src', src);
		return false;
	});
});