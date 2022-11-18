$(function() {
	var year = new Date();
	var footYear = year.getFullYear();
	$(".footer-year").text(footYear);
});

$(function() {
	$(window).on('load', function() {
		$('#preloader1').delay(150).fadeOut('slow');
		$('body').delay(150).css({
			'overflow': 'visible'
		});
	})
	$('.language-toogle').on('click', function() {
		$(this).toggleClass("language-active").siblings().removeClass("language-active");
		if($(this).hasClass("language-active")) {
			$('.scale-up').stop().fadeIn();
		} else {
			$('.scale-up').stop().fadeOut();
		}
	});
	$(".scale-up,.language-toogle").on("click", function(e) {
		e.stopPropagation();
	});
	$(document).click(function(e) {
		var _con = $(".language-toogle");
		if(!_con.is(e.target) && _con.has(e.target).length === 0) {
			$(".language-toogle").removeClass("language-active");
			$('.scale-up').stop().fadeOut();
		}
	});
});

$(function() {
	$(".treeview>a").click(function() {
		if($("body").hasClass("main-sidebar-open")) {} else {
//			$(this).parent().toggleClass("active");
			$(this).siblings().stop().slideToggle().parent().siblings().children("ul").slideUp();
			$(this).parent().stop().toggleClass("menu-icon-down");
			$(this).parent().siblings().removeClass("menu-icon-down");
			$(this).siblings(".treeview-menu").children().removeClass("second-menu-icon").addClass("").children("ul").slideUp();
		}
	});
});

$(function() {
	$(".tab-box>div>a").click(function(e) {
		e.preventDefault();
		$(this).addClass("on").parent().siblings().children("a").removeClass("on");
	});
	$(".tabs ul li a").click(function(e) {
		e.preventDefault();
		$(this).addClass("tabs-on").parent().siblings().children("a").removeClass("tabs-on");
		var h = $(this).attr("href");
		$(h).addClass("tabs-item-on").siblings(".tabs-item-on").removeClass("tabs-item-on")
	});
});

$(function() {
	$(document).on('click', '.fund-piaochecked', function() {
		if($(this).hasClass("on")) {
			$(this).parents().siblings(".form-row").find("#apply-next").attr("disabled", false);
		} else {
			$(this).parents().siblings(".form-row").find("#apply-next").attr("disabled", true);
		}
	})

	$(".radiospan").bind("click", function() {
		$(this).addClass("on").siblings().removeClass("on");
	});
	$(".piaochecked").click(function() {
		if($(this).hasClass("on")) {
			$(this).removeClass("on");
		} else {
			$(this).addClass("on");
		}
	});
});
$(function() {
	$(".editProfile").click(function() {
		$.confirm({
			theme: 'Modern',
			icon: "modal-icon-warning",
			title: "",
			content: '<p>Please ensure you provide authentic and accurate information. GO Markets reserves the right but has no obligation to confirm the accuracy of this information or to contact account holders, Banks, Futures traders and others if deemed necessary. Providing falsified information can lead to litigation and legal sanctions.</p>  <p>By clicking the "Submit" button, you authorise to make the changes. You understand that the changes may cause the information related to the account to be different from the previous information. If there is any dispute, you agree not to pursue any responsibility from GO Markets.</p>',
			animation: 'zoom',
			closeAnimation: 'scale',
			buttons: {
				Cancel: {
					btnClass: 'buttons buttons-trans',
				},
				OK: {
					btnClass: 'buttons buttons-success',
				},
			}
		});
	});
});
