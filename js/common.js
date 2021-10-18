function selCountry() {
	var sel = $("#country option:selected").attr("title");
	$("#CountryNumber").val(sel)
}
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
$(function() {
	var year = new Date();
	var footYear = year.getFullYear();
	$("#footer-year").text(footYear)
});
//上传证明切换
function identity(question) {
	if(question.value == "2") {
		$(".select-id").css("display", "block").siblings().css('display', 'none');
		$(question).css("border-color", "#ddd");
	} else if(question.value == "1") {
		$(".select-passport").css("display", "block").siblings().css('display', "none");
		$(question).css("border-color", "#ddd");
	}
};

$(function() {
	//单选框
	$(".radiospan").bind("click", function() {
		$(this).addClass("on").siblings().removeClass("on");
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
});

$(function() {
	$("#checkAll").click(function() {
		if($(this).hasClass("on")) {
			$(".legal-download-box").find(".piaochecked").addClass("on_check");
		} else {
			$(".legal-download-box .piaochecked").removeClass("on_check");
		}
	});

	$(".legal-download-box .piaochecked").click(function() {
		$(".legal-download-box .piaochecked").each(function() {
			if($(".legal-download-box .piaochecked.on_check").length == 4) {
				$("#checkAll").addClass("on");
				$("#uncheckAll").removeClass("on");
			} else {
				$("#checkAll").removeClass("on");

			}
		});
	});

	$("#uncheckAll").click(function() {
		$(".legal-download-box .piaochecked").removeClass("on_check");
	});

});