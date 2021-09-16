$(function() {
	//login out
	$(".right-bar-user").click(function() {
		$(".scale-up").stop().slideToggle(200);
		if($(this).children().hasClass("fa-angle-down")) {
			$(this).children("i").removeClass("fa-angle-down").addClass("fa-angle-up")
		} else {
			$(this).children("i").removeClass("fa-angle-up").addClass("fa-angle-down")
		}
	});
	$(".scale-up,.mobile-user").click(function(e) {
		e.stopPropagation()
	});
	$(".mobile-user").click(function() {
		$(".scale-up").stop().slideToggle(200)
	});
	$(document).click(function(e) {
		var _con = $(".right-bar-user");
		if(!_con.is(e.target) && _con.has(e.target).length === 0) {
			$(".scale-up").slideUp();
			$(".right-bar-user").children("i").removeClass("fa-angle-up").addClass("fa-angle-down")
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
			title: "Error!",
			content: "文件大小不能超过 10M",
			type: "red",
			typeAnimated: true,
			buttons: {
				tryAgain: {
					text: "Try again",
					btnClass: "btn-red",
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
			title: "Error!",
			content: "请选择正确的图片格式（jpg,png,gif,dwg,pdf,gif )！",
			type: "default",
			typeAnimated: true,
			buttons: {
				tryAgain: {
					text: "Try again",
					btnClass: "btn-default",
				}
			}
		});
		target.value = "";
		return
	}
}
$(function() {
	//	menu
	$(".treeview>a").click(function() {
		$(this).siblings().stop().slideToggle().parent().siblings().children("ul").slideUp();
		$(this).parent().stop().toggleClass("menu-icon-down");
		$(this).parent().siblings().children("ul").slideUp();
		$(this).parent().siblings().removeClass("menu-icon-down")
	})
	$(".shares-question a").bind("click", function(e) {
		e.preventDefault();
		$(this).children("i").addClass("fa-dot-circle-o");
		$(this).children("input").prop("checked", true);
		$(this).parent().siblings().children("a").children("i").removeClass("fa-dot-circle-o").addClass("fa-circle-o");
		$(this).parent().siblings().children("a").children("input").removeAttr("checked");
		$(this).addClass("chosen").parent().siblings().children("a").removeClass("chosen");
	});
	//activate-stock-account.html
	$(".stock-question a").bind("click", function(e) {
		e.preventDefault();
		$(this).children("i").addClass("fa-dot-circle-o");
		$(this).children("input").prop("checked", true);
		$(this).parent().siblings().children("a").children("i").removeClass("fa-dot-circle-o").addClass("fa-circle-o");
		$(this).parent().siblings().children("a").children("input").removeAttr("checked");
		$(this).addClass("answer-check").parent().siblings().children("a").removeClass("answer-check");
		if($("#to-check-stock-account").hasClass("answer-check")) {
			$("#check-stock-account").show();
		} else {
			$("#check-stock-account").hide();
		}
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
$(function(){
		 		$(".trade-pause").click(function(){
		 			if($(this).hasClass("fa-pause")){
		 				$(this).removeClass("fa-pause").addClass("fa-play");
		 			}else{
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
});

$(document).ready(function(){
				$(function() {
				$('.dayliSparkline').sparkline('html',
					{ type: 'line',
					width:120,
					height:24,
					valueSpots:{':49': '#d9534f', '50:': '#d9534f'},
					spotRadius:1.4,
					fillColor:"",
				}
				);
			});
});
