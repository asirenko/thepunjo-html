jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.header-buttons .nav-trigger').on('click', function(event){
		if($(event.target).is('.header__main__center .nav')) $(this).children('.header__main__center .nav__list').toggleClass('is-visible');
	});
});