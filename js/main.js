$(document).ready(function(){
	$('.header-burger').click(function(event){
		$('.header-burger,.header-body,.header-body__colum__logo').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
