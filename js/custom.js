$(window).load(function() {
	var get_width = $(window).width();
	if(get_width >= 768) {
		var min_height = $(window).height() - $(".site-main > header").height() - $(".site-main > footer").height();
		$(".container-main").css("min-height", min_height);
	}
});
$(document).ready(function() {
	var get_width = $(window).width();
	$(".container-main > section:first-child").css({
		"min-height": "100px"
	});
	var banner_height = $(".container-main > section:first-child").height();
	var header_height = $(".site-main > header").height();
	var scroller_height = banner_height - header_height;
	if($(window).scrollTop() > scroller_height) {
		$('header').addClass('sticky');
	} else {
		$('header').removeClass('sticky');
	}
	if($(window).scrollTop() > 100) {
		$('.scroll_top').addClass('visible');
	} else {
		$('.scroll_top').removeClass('visible');
	}
	$(".scroll_top").click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 2000);
	});
	if(get_width >= 1025) {
		new WOW().init();
	}
	$(".sidebar .title .icon").click(function() {
		$(this).parent(".title").parent(".sidebar").children("ul").slideToggle();
		$(this).parent(".title").parent(".sidebar").toggleClass("in");
	});
	$(".news-sidebar span").click(function() {
		$(this).parent(".news-sidebar").children("ul").slideToggle();
		$(this).parent(".news-sidebar").toggleClass("in");
	});
	$(".news-sidebar.tags span").click(function() {
		$(this).parent(".news-sidebar").children(".tags-box").slideToggle();
	});
	$(".news-sidebar.iframe span").click(function() {
		$(this).parent(".news-sidebar").children(".news-iframe").slideToggle();
	});
	$(".input-box .input").focusin(function() {
		$(this).parent("span").parent(".input-box").addClass("focus");
	});
	$(".input-box .input").focusout(function() {
		$(this).parent("span").parent(".input-box").removeClass("focus");
	});
	$(".hl-newsletter-input-box .hl-newsletter-input").focusin(function() {
		$(this).parent(".hl-newsletter-input-box").addClass("focus");
	});
	$(".hl-newsletter-input-box .hl-newsletter-input").focusout(function() {
		$(this).parent(".hl-newsletter-input-box").removeClass("focus");
	});
	$(".hl-newsletter-input-box .hl-newsletter-input").change(function(e) {
		if($(this).val() == "") {
			$(this).parent(".hl-newsletter-input-box").removeClass("filled");
		} else {
			$(this).parent(".hl-newsletter-input-box").addClass("filled");
		}
	});
	$(".input-box.submit-box .input").focusin(function() {
		$(this).parent(".input-box").addClass("focus");
	});
	$(".input-box.submit-box .input").focusout(function() {
		$(this).parent(".input-box").removeClass("focus");
	});

	function GetTextBoxValueOne() {
		$(".hl-newsletter-input-box").children(".hl-newsletter-input").each(function() {
			if($(this).val() == "") {
				$(this).parent(".hl-newsletter-input-box").removeClass("filled");
			} else {
				$(this).parent(".hl-newsletter-input-box").addClass("filled");
			}
		});
	}
	GetTextBoxValueOne();
	$(".hl-newsletter-submit").focusin(function() {
		$(".hl-newsletter-submit-container").addClass("focus");
	});
	$(".hl-newsletter-submit").focusout(function() {
		$(".hl-newsletter-submit-container").removeClass("focus");
	});
	$(".hl-newsletter-submit").click(function() {
		$(".hl-newsletter-submit-container").removeClass("focus");
	});
	$(".input-box .input").change(function(e) {
		if($(this).val() == "") {
			$(this).parent("span").parent(".input-box").removeClass("filled");
		} else {
			$(this).parent("span").parent(".input-box").addClass("filled");
		}
	});
	$(".submit-box input").click(function() {
		$(this).parent(".submit-box").removeClass("focus");
	});
	$(".mobile-accordion .title span").click(function() {
		if($(this).parent(".title").parent(".mobile-accordion").hasClass("in")) {
			$(this).parent(".title").parent(".mobile-accordion").children(".mobile-accordion-toggle").slideUp();
			$(".mobile-accordion").removeClass("in");
		} else {
			$(".mobile-accordion").children(".mobile-accordion-toggle").slideUp();
			$(".mobile-accordion").removeClass("in");
			$(this).parent(".title").parent(".mobile-accordion").toggleClass("in");
			if($(this).parent(".title").parent(".mobile-accordion").hasClass('mobile-toggle')) {
				$(this).parent(".title").parent(".mobile-accordion").children(".mobile-accordion-toggle").slideToggle();
			} else {
				$(".mobile-accordion-toggle").slideUp();
			}
		}
	});
	$(".armodal-close").click(function() {
		$(".armodal_box").fadeOut(700);
		$("body").removeClass("sticky");
	});
	$(".popup").click(function() {
		var a = $(this).attr("data-id");
		var m = $(".armodal_box");
		$("." + a).fadeIn(700);
		$("body").addClass("sticky");
	});
	$(".video_close").click(function() {
		$("body").removeClass("video_sticky");
		$(".video_container").fadeOut();
		$(".video_box").remove();
	});
	$(".video_popup").click(function() {
		var a = $(this).attr("data-src");
		$(".video_container").fadeIn();
		$(".video_container").append("<div class='video_box'><iframe src='" + a + "?autoplay=1'></iframe></div>");
		$("body").addClass("video_sticky");
	});
	$(".file-box .input").change(function(e) {
		var z = $(this).val().replace(/\\/g, '/').replace(/.*\//, '');
		if(z == "") {
			$(this).parent(".file-box").children(".input-text").val("No Files Selected");
		} else {
			$(this).parent(".file-box").children(".input-text").val(z);
		}
	});
	$(".product_details_img").click(function() {
		$(this).children("img").trigger("click");
	});
	$(".search-btn").click(function() {
		$(".search-box").show();
	});
});
$(window).resize(function() {
	var get_width = $(window).width();
	if(get_width >= 768) {
		var min_height = $(window).height() - $(".site-main > header").height() - $(".site-main > footer").height();
		$(".container-main").css("min-height", min_height);
	}
});
$(window).scroll(function() {
	var banner_height = $(".container-main > section:first-child").height();
	var header_height = $(".site-main > header").height();
	var scroller_height = banner_height - header_height;
	if($(window).scrollTop() > scroller_height) {
		$('header').addClass('sticky');
	} else {
		$('header').removeClass('sticky');
	}
	if($(window).scrollTop() > 100) {
		$('.scroll_top').addClass('visible');
	} else {
		$('.scroll_top').removeClass('visible');
	}
});
$(document).keyup(function(e) {
	if(e.keyCode === 27) {
		$('.video_close').click();
	}
});
$(window).on('click touchend', function(e) {

	if(!$(e.target).hasClass("search-btn") && !$(e.target).hasClass("search-text") && !$(e.target).hasClass("search-input") && $(e.target).parents(".search-box").length === 0) {
		$(".search-box").hide();
	}

	if(!$(e.target).hasClass("video_popup") && !$(e.target).hasClass("video_close") && !$(e.target).hasClass("form_close") && $(e.target).parents(".video_box").length === 0) {
		$("body").removeClass("video_sticky");
		$(".video_container").fadeOut();
		$(".video_box").remove();
	}
});

// 回电弹框部分增加电话与国家区号匹配
function selCountry() {
	var sel = $("#call-back-country option:selected").attr("title");
	$("#CountryNumber").val(sel);
}
//	新闻文字超出隐藏		
jQuery.fn.limit = function() {
	var self = $("[limit]");
	self.each(function() {
		var objString = $(this).text();
		var objLength = $(this).text().length;
		var num = $(this).attr("limit");
		if(objLength > num) {
			$(this).attr("title", objString);
			objString = $(this).text(objString.substring(0, num) + "...");
		}
		$(this).attr("title", " ")
	})
}

$(function() {
	$(".blog-list-content p").attr("limit", 250)
	$("[limit]").limit();
})