$(document).ready(function()
{
	var menu_count = $(".menu li").has("ul").toArray();
	if(menu_count.length == 0)
	{
		$(".menu").addClass("no-sub");
	}
	$(".navigation").prepend('<span class="menu_title"><i class="fa fa-times"></i>Close Menu</span>');
	
	if($(".menu li").has("ul"))
	{
		$(".menu li").has("ul").addClass("sub");
		$(".menu li").has("ul").append("<span class='sub_toggle'></span>");
		$(".menu li ul").addClass("sub-menu");
	}
	$(".sub").click(function()
	{
		$(this).children("a").addClass("open");
	});
	if($(".menu li").has("ul"))
	{
		$(".menu li").has("ul").addClass("sub");
		$(".menu li").has("ul").append("<span class='device_toggle'></span>");
		$(".menu li ul").addClass("sub-menu");
	}
	$(".device_toggle").click(function(e)
	{
		$(this).parent("li").children("ul").slideToggle();
		$(this).toggleClass("in");
		if($(".menu li").hasClass("megamenu"))
		{
			$(this).parent("li").children(".mega_menu").slideToggle();
		}
	});
	var get_window_width = $(window).width();
	if(get_window_width >= 1025)
	{
		$(".navigation").mCustomScrollbar();
	}
	else
	{
		$(".navigation").mCustomScrollbar("destroy");
	}
	if($(".menu li li").has("ul"))
	{
		$(".menu li li").has("ul").addClass("inner-sub");
	}
	$(".navigation-toggle").click(function()
	{
		$("body").toggleClass("menu-action");
	});
	$(".menu_title").click(function()
	{
		$(".navigation-toggle").trigger("click");
	});
	var window_height = $(window).height();
	$(".navigation").height(window_height);
	if($(".header-bottom li").has("ul"))
	{
		$(".header-bottom li").has("ul").addClass("sub-level");
	}
	
});
$(window).resize(function()
{
	var window_height = $(window).height();
	$(".navigation").height(window_height);
});
$(window).on('click touchend',function (e)
{
	var width=$(window).width();
	if (!$(e.target).hasClass("navigation-toggle") && !$(e.target).hasClass("span-icon") && $(e.target).parents(".navigation").length === 0)
	{
		$("body").removeClass("menu-action");
	}
});