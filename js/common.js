
$(function () {
	$(function () {
		$('.drop_box').on('click', function () {
			var _that = this;
			$(_that).siblings().children('.scale_up').stop().hide();
			$(_that).toggleClass("drop_active").siblings().removeClass("drop_active");
			if ($(_that).hasClass("drop_active")) {
				$(_that).children('.scale_up').stop().show();
			} else {
				$(_that).children('.scale_up').stop().hide();
			}
		});
		$(document).click(function (e) {
			var _con = $(".drop_box");
			if (!_con.is(e.target) && _con.has(e.target).length === 0) {
				$(".drop_box").removeClass("drop_active");
				$('.scale_up').stop().hide();
			}
		});
	});

	//footer year
	var year = new Date();
	var footYear = year.getFullYear();
	$("#footer-year").text(footYear);

});

$(function () {
	var testurl = window.location.pathname.toLocaleLowerCase();
	function addActive(key1) {
		var controlLink1 = $("#" + key1.replace(/\//g, ''));
		controlLink1.parent().addClass("active");
	}
	if (testurl.indexOf("dashboard") > -1) {
		addActive("dashboard");
	} else if ((testurl.indexOf("clients") > -1)) {
		addActive("clients");
	} else if ((testurl.indexOf("closedtradesummary") > -1)) {
		addActive("closedTradeSummary");
	} else if ((testurl.indexOf("closedtradedetails") > -1)) {
		addActive("closedTradeDetails");
	} else if ((testurl.indexOf("opentradedetails") > -1)) {
		addActive("openTradeDetails");
	} else if ((testurl.indexOf("commissionsummary") > -1)) {
		addActive("commissionSummary");
	} else if ((testurl.indexOf("commissiondetails") > -1)) {
		addActive("commissionDetails");
	} else if ((testurl.indexOf("clientdeposits") > -1)) {
		addActive("clientDeposits");
	} else if ((testurl.indexOf("clientwithdrawals") > -1)) {
		addActive("clientWithdrawals");
	}
});
$(window).on('click touchend', function (e) {
	if (!$(e.target).hasClass("sidebar-toggle") && $(e.target).parents(".main-sidebar").length === 0) {
		$("body").removeClass("sidebar-open");
	}
});

$(document).ready(function () {
	jeDate({
		dateCell: "#dateinfo1",
		isinitVal: true,
		isTime: false,
		isClear: false,
		minDate: "2014-09-19 00:00:00",
		format: "YYYY/MM/DD"
	});
	jeDate({
		dateCell: "#dateinfo2",
		isinitVal: true,
		isTime: false,
		isClear: false,
		minDate: "2014-09-19 00:00:00",
		format: "YYYY/MM/DD"
	});
	jeDate({
		dateCell: "#dateinfo3",
		isinitVal: true,
		isTime: false,
		isClear: false,
		minDate: "2014-09-19 00:00:00",
		format: "YYYY/MM/DD"
	});
	jeDate({
		dateCell: "#dateinfo4",
		isinitVal: true,
		isTime: false,
		isClear: false,
		minDate: "2014-09-19 00:00:00",
		format: "YYYY/MM/DD"
	});
	jeDate({
		dateCell: "#dateinfo5",
		isinitVal: true,
		isTime: false,
		isClear: false,
		minDate: "2014-09-19 00:00:00",
		format: "YYYY/MM/DD"
	});
	jeDate({
		dateCell: "#dateinfo6",
		isinitVal: true,
		isTime: false,
		isClear: false,
		minDate: "2014-09-19 00:00:00",
		format: "YYYY/MM/DD"
	});

});

$(function () {
	$(".sidebar-pc-toggle .sidebar-toggle").click(function () {
		$('body').toggleClass('pc_menu_toggle');
		// if ($('body').hasClass('pc_menu_toggle')) {
		// 	$('#clients-chart').highcharts().setSize(
		// 		$(".content-wrapper").width() / 1.3,
		// 		$('#clients-chart').highcharts().height, doAnimation = true
		// 	);
		// 	$('#deposits-chart').highcharts().setSize(
		// 		$(".content-wrapper").width() / 1.3,
		// 		$('#deposits-chart').highcharts().height, doAnimation = true
		// 	);

		// 	$('#withdrawals-chart').highcharts().setSize(
		// 		$(".content-wrapper").width() / 1.3,
		// 		$('#withdrawals-chart').highcharts().height, doAnimation = true
		// 	);

		// }else{
		// 	$('#clients-chart').highcharts().setSize(
		// 		$(".content-wrapper").width() / 1.68,
		// 		$('#clients-chart').highcharts().height, doAnimation = true
		// 	);
		// 	$('#deposits-chart').highcharts().setSize(
		// 		$(".content-wrapper").width() / 1.68,
		// 		$('#deposits-chart').highcharts().height, doAnimation = true
		// 	);
		// 	$('#withdrawals-chart').highcharts().setSize(
		// 		$(".content-wrapper").width() / 1.68,
		// 		$('#withdrawals-chart').highcharts().height, doAnimation = true
		// 	);
		// }

	});
});
$(function () {
	$(".main-header .sidebar-toggle").click(function () {
		$('body').toggleClass('sidebar-open');
	});
});

