$(function() {
	var w_height = $(window).height();
	var p_head = $('header').height();
	var p_line = $('.page-line').height();
	var p_foot = $('footer').height() + 30;
	var p_container = $('.login-container');
	$(p_container).css("min-height", w_height - p_foot - p_line - 140);

});