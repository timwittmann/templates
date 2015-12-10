$(function() {

	//highlight the current nav
	$("#home a:contains('Home')").parent().addClass('active');
	$("#about a:contains('About')").parent().addClass('active');
	$("#leaders a:contains('Leaders')").parent().addClass('active');
	$("#games a:contains('Games')").parent().addClass('active');
	$("#contact a:contains('Contact')").parent().addClass('active');


	//make menus drop automatically
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//hover
    
    
    $("[data-toggle='tooltip']").tooltip({ animation: true});

}); //jQuery is loaded