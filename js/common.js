$(function () {
	$('.drop_box').on('click', function () {
		var _that = this;
		$(_that).siblings().children('.scale_up').stop().fadeOut();
		$(_that).toggleClass("drop_active").siblings().removeClass("drop_active");
		if ($(_that).hasClass("drop_active")) {
			$(_that).children('.scale_up').stop().fadeIn();
		} else {
			$(_that).children('.scale_up').stop().fadeOut();
		}
	});
	$(".scale_up,.drop_box").on("click", function (e) {
		e.stopPropagation();
	});
	$(document).click(function (e) {
		var _con = $(".drop_box");
		if (!_con.is(e.target) && _con.has(e.target).length === 0) {
			$(".drop_box").removeClass("drop_active");
			$('.scale_up').stop().fadeOut();
		}
	});

});
function selCountry() {
	var sel = $("#country option:selected").attr("title");
	$("#CountryNumber").val(sel)
}
$(function() {
	$(".qustion a").click(function(e) {
		e.preventDefault();
		$(this).children("i").addClass("fa-dot-circle-o");
		$(this).children("input").prop("checked", true);
		$(this).parent().siblings().children("a").children("i").removeClass("fa-dot-circle-o").addClass("fa-circle-o");
		$(this).parent().siblings().children("a").children("input").removeAttr("checked");
		$(this).addClass("experience-check").parent().siblings().children("a").removeClass("experience-check");
		var h = $(this).attr("href");
		$(h).addClass("answer-box-on").siblings(".answer-box-on").removeClass("answer-box-on")
	});
	$(".answer-chosen a").click(function() {
		$(this).children("i").addClass("fa-dot-circle-o");
		$(this).children("input").prop("checked", true);
		$(this).siblings("a").children("i").removeClass("fa-dot-circle-o");
		$(this).siblings("a").children("input").removeAttr("checked");
	});
	$("#trade-type").click(function() {
		if($(this).children("i").hasClass("fa-check-square-o")) {
			$(this).css({
				"color": "#a7a7a7"
			}).children("i").removeClass("fa-check-square-o").addClass("fa-square-o")
		} else {
			$(this).css({
				"color": "#3A4C56"
			}).children("i").addClass("fa-check-square-o").removeClass("fa-square-o")
		}
	});
	$(".agreement-box p").click(function() {
		if($(this).children("i").hasClass("fa-check-square-o")) {
			$(this).children("i").removeClass("fa-check-square-o").addClass("fa-square-o");
			$(this).children("input").removeAttr("checked");
		} else {
			$(this).children("i").addClass("fa-check-square-o").removeClass("fa-square-o");
			$(this).children("input").prop("checked", true);
		}
	});
	$("#checkAll").click(function() {
		if($(this).children("i").hasClass("fa-check-square-o")) {
			$(".agreement-clause-check div").addClass("on_check").children("span").children("i").addClass("fa-check-square-o").removeClass("fa-square-o");
			$(".agreement-clause-check div").addClass("on_check").children("span").children("input").prop("checked", true);
		} else {
			$(".agreement-clause-check div").removeClass("on_check").children("span").children("i").removeClass("fa-check-square-o").addClass("fa-square-o");
			$(".agreement-clause-check div").addClass("on_check").children("span").children("input").removeAttr("checked");
		}
	});
	$(".agreement-clause-check div span").click(function() {
		if($(this).children("i").hasClass("fa-check-square-o")) {
			$(this).parent().removeClass("on_check");
			$(this).children("i").removeClass("fa-check-square-o").addClass("fa-square-o");
			$(this).children("input").removeAttr("checked");
		} else {
			$(this).parent().addClass("on_check");
			$(this).children("i").addClass("fa-check-square-o").removeClass("fa-square-o");
			$(this).children("input").prop("checked", true);
		}
		$(".agreement-clause-check div").each(function() {
			if($(".agreement-clause-check div.on_check").length == 7) {
				$("#checkAll").children("i").addClass("fa-check-square-o").removeClass("fa-square-o");
				$("#checkAll").children("input").prop("checked", true);
			} else {
				$("#checkAll").children("i").removeClass("fa-check-square-o").addClass("fa-square-o");
				$("#checkAll").children("input").removeAttr("checked");
			}
		})
	});
	$("#card-title a").click(function(e) {
		e.preventDefault();
		$(this).children("i").addClass("fa-dot-circle-o");
		$(this).parent().siblings().children("a").children("i").removeClass("fa-dot-circle-o").addClass("fa-circle-o");
		$(this).addClass("card-titles-on").parent().siblings().children("a").removeClass("card-titles-on");
		var h = $(this).attr("href");
		$(h).addClass("card-tabs-on").siblings(".card-tabs-on").removeClass("card-tabs-on")
	});
	var year = new Date();
	var footYear = year.getFullYear();
	$("#footer-year").text(footYear)
});