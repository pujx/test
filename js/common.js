$(function() {
	/*------------- preloader js --------------*/
	$(window).on('load', function() {
		$('#preloader1').delay(150).fadeOut('slow');
		$('body').delay(150).css({
			'overflow': 'visible'
		});
	})

	$(".sidebar-toggle").click(function() {
		$(this).toggleClass("sidebar-toggle-open");
	});
	$("#pc-toggle").click(function() {
		$("body").toggleClass("main-sidebar-open");

	});

	//login out
	$('.right-bar-toogle').on('click', function() {
		$(this).toggleClass("right-bar-active").siblings().removeClass("right-bar-active");
		if($(this).hasClass("right-bar-active")) {
			$(this).children("a").children("i").removeClass("fa-angle-down").addClass("fa-angle-up");
		} else {
			$(this).children("a").children("i").removeClass("fa-angle-up").addClass("fa-angle-down");
		};
	});

	$(".scale-up,.right-bar-toogle").on("click", function(e) {
		e.stopPropagation();
	});
	$(document).click(function(e) {
		var _con = $(".right-bar-toogle");
		if(!_con.is(e.target) && _con.has(e.target).length === 0) {
			$(".right-bar-toogle").removeClass("right-bar-active");
			$(".right-bar-toogle").children("a").children("i").removeClass("fa-angle-up").addClass("fa-angle-down");
		}
	});

});

function selCountry() {
	var sel = $("#country option:selected").attr("title");
	$("#CountryNumber").html(sel)
}
//upload documnets
$(function() {
	$(".cardList a").mousedown(function() {
		$(this).addClass("card-menu-check").siblings(".card-menu-check").removeClass("card-menu-check");
		var h = $(this).attr("href");
		$(h).addClass("cardListOn").siblings(".cardListOn").removeClass("cardListOn")
	})
});
$(function() {
	$("input[type=file]").change(function() {
		$(this).parents(".uploader").find(".filename").val($(this).val())
	});
	$("input[type=file]").each(function() {
		if($(this).val() == "") {
			$(this).parents(".uploader").find(".filename").val("Please Select...")
		}
	})
});

function fileChange(target) {
	var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
	var fileSize = 0;
	if(isIE && !target.files) {
		fileSize = file.Size
	} else {
		fileSize = target.files[0].size
	}
	var size = fileSize / 1024;
	if(size > 10000) {

		$.confirm({
			theme: 'Modern',
			title: "Error!",
			content: "文件大小不能超过 10M",
			type: 'orange',
			typeAnimated: true,
			buttons: {
				Cancel: {
					btnClass: 'btn-default',
				},
				OK: {
					btnClass: 'btn-orange',
				},
			}
		});
		target.value = "";
		return
	}
	var name = target.value;
	var fileName = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
	if(fileName != "jpg" && fileName != "jpeg" && fileName != "pdf" && fileName != "png" && fileName != "dwg" && fileName != "gif") {

		$.confirm({
			theme: 'Modern',
			title: "Error!",
			content: "请选择正确的图片格式（jpg,png,gif,dwg,pdf,gif )！",
			type: 'orange',
			typeAnimated: true,
			buttons: {
				Cancel: {
					btnClass: 'btn-default',
				},
				OK: {
					btnClass: 'btn-orange',
				},
			}
		});
		target.value = "";
		return
	}
}
$(function() {
	//	menu
	$(".treeview>a").click(function() {
		if($("body").hasClass("main-sidebar-open")) {} else {
			$(this).siblings().stop().slideToggle().parent().siblings().children("ul").slideUp();
			$(this).parent().stop().toggleClass("menu-icon-down");
			$(this).parent().siblings().removeClass("menu-icon-down");
			$(this).siblings(".treeview-menu").children().removeClass("second-menu-icon").addClass("").children("ul").slideUp();
		}
	});
	$(".treeview-second>i").click(function() {
		$(this).siblings("ul").stop().slideToggle().parent().siblings().children("ul").slideUp();
		$(this).parent().stop().toggleClass("second-menu-icon");
		$(this).parent().siblings().removeClass("second-menu-icon");
	});

	$(".chosen-shares a").click(function() {
		if($(this).children("i").hasClass("fa-check-square-o")) {
			$(this).children("i").removeClass("fa-check-square-o").addClass("fa-square-o");
			$(this).children("input").removeAttr("checked");
		} else {
			$(this).children("i").addClass("fa-check-square-o").removeClass("fa-square-o");
			$(this).children("input").prop("checked", true);
		}
	});
	//	trading us shares
	$(".shares-chosen a").click(function() {
		$(this).children("i").addClass("fa-dot-circle-o");
		$(this).children("input").prop("checked", true);
		$(this).siblings("a").children("i").removeClass("fa-dot-circle-o");
		$(this).siblings("a").children("input").removeAttr("checked");
	});
	//footer year
	var year = new Date();
	var footYear = year.getFullYear();
	$("#footer-year").text(footYear);
});

function labelTextColor(beginColor) {
	$(beginColor).click(function() {
		if($(this).children("i").hasClass("fa-check-square-o")) {
			$(this).css({
				"color": "#a7a7a7"
			}).children("i").removeClass("fa-check-square-o").addClass("fa-square-o")
		} else {
			$(this).css({
				"color": "#000"
			}).children("i").addClass("fa-check-square-o").removeClass("fa-square-o")
		}
	});
};
labelTextColor("#fast-transfer");

function labelCheckbox(begincheckbox) {
	$(begincheckbox).click(function() {
		if($(this).children("i").hasClass("fa-check-square-o")) {
			$(this).children("i").removeClass("fa-check-square-o").addClass("fa-square-o")
		} else {
			$(this).children("i").addClass("fa-check-square-o").removeClass("fa-square-o")
		}
	});
};
labelCheckbox(".trade-setting-checkbox");

function labelNext(beginSelector, endSelector) {
	$(beginSelector).click(function() {
		var t = this;
		if($(this).children("i").hasClass("fa-check-square-o")) {
			$(this).children("i").removeClass("fa-check-square-o").addClass("fa-square-o");
			$(endSelector).attr("disabled", true);
		} else {
			$(this).children("i").addClass("fa-check-square-o").removeClass("fa-square-o");
			$(endSelector).attr("disabled", false);
		}
	});
};

labelNext("#remove-account", "#re-account-btn");
labelNext("#remove-account2", "#re-account-btn2");
$(document).on('click', '.apply-fund-manage', function() {
	var t = this;
	if($(this).children("i").hasClass("fa-check-square-o")) {
		$(this).children("i").removeClass("fa-check-square-o").addClass("fa-square-o");
		$("#apply-fund-manage-btn").attr("disabled", true);
	} else {
		$(this).children("i").addClass("fa-check-square-o").removeClass("fa-square-o");
		$("#apply-fund-manage-btn").attr("disabled", false);
	}
})
$(function() {
	$(".trade-pause").click(function() {
		if($(this).hasClass("fa-pause")) {
			$(this).removeClass("fa-pause").addClass("fa-play");
		} else {
			$(this).addClass("fa-pause").removeClass("fa-play");
		}
	});

});

$(function() {
	$(window).scroll(function(e) {
		if($(window).scrollTop() > 300)
			$(".toTop").fadeIn(300);
		else
			$(".toTop").fadeOut(300);
	});
	$(".toTop").click(function(e) {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	$("#close-feedback-btn").click(function() {
		$.confirm({
			theme: 'Modern',
			title: "Success!",
			content: "我们已经收到你的反馈，并且正在处理中。",
			type: 'orange',
			typeAnimated: true,
			buttons: {
				OK: {
					btnClass: 'btn-orange',
					action: function() {
						$("#feedback-modal").modal("hide");
					},
				}
			}
		});
	});

});

$(document).ready(function() {
	$(".promo-toggle-btn1").click(function(e) {
		if($(this).hasClass("promo_show")) {
			$(this).removeClass("promo_show").siblings("span").html("Click to view more about <br/> Terms and Conditons");
			$(this).parent().siblings(".promo-toggle-wrap").stop().slideUp();
			$(".promo-toggle-btn2").removeClass("promo_show");
		} else {
			$(this).addClass("promo_show").siblings("span").html("Terms and Conditons");
			$(".promo-toggle-btn2").addClass("promo_show");
			$(this).parent().siblings(".promo-toggle-wrap").stop().slideDown()
		}
	});
	$(".promo-toggle-btn2").click(function(e) {
		if($(this).hasClass("promo_show")) {
			$(this).removeClass("promo_show").parent(".promo-toggle-wrap").stop().fadeOut();
			$(".promo-toggle-btn1").removeClass("promo_show");
		} else {
			$(this).addClass("promo_show").parent(".promo-toggle-wrap").stop().slideDown();
			$(".promo-toggle-btn1").addClass("promo_show");
		}
	});
	//复选框
	$(".piaochecked").click(function() {
		if($(this).hasClass("on_check")) {
			$(this).removeClass("on_check");
			$(this).children().children("input").removeAttr("checked");
		} else {
			$(this).addClass("on_check");
			$(this).children().children("input").prop("checked", true);
		}
	});
	//活动切换
	$('.promotion_tab_ul li').click(function() {
		var liindex = $('.promotion_tab_ul li').index(this);
		var transfer_w=$(".promotion_tab_ul li").length-1;
		var liindexTXT = $(this).text();
		$(this).addClass('promotion_title_linked').siblings().removeClass('promotion_title_linked');
		$('.promotion_tab_list div.promotion_wrap').siblings('div.promotion_wrap').hide();
		$('.promotion_tab_list div.promotion_wrap').eq(liindex).fadeIn();

		if(liindex==transfer_w){
			$(".promotion3_title").css({"z-index":"2"})
		}else{
			$(".promotion3_title").css({"z-index":"1"})
		};
		var liWidth = $('.promotion_tab_ul li').width();
		var li_left= $(this).css("left");
		$('.promotion_tab .promotion_tab_ul p').stop(false, true).animate({
			'left': li_left
		}, 300);
		$('.promotion_tab .promotion_tab_ul p').html(liindexTXT);
		
	});

});