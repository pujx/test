var chart = Highcharts.chart('Growth-chart', {
	chart: {
		type: 'line'
	},
	title: {
		text: ''
	},
	credits: {
		enabled: false
	},
	subtitle: {
		text: ''
	},
	xAxis: {
		categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
	},
	yAxis: {
		title: {}
	},
	plotOptions: {
		line: {
			dataLabels: {
				// 开启数据标签
				enabled: true
			},
			// 关闭鼠标跟踪，对应的提示框、点击事件会失效
			enableMouseTracking: true
		}
	},
	series: [{
		name: 'Equity',
		data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	}, {
		name: 'Growth',
		data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	}]
});

var chart = Highcharts.chart('Profit-chart', {
	chart: {
		type: 'column'
	},
	credits: {
		enabled: false
	},
	title: {
		text: ''
	},
	subtitle: {
		text: ''
	},
	xAxis: {
		categories: [
			'一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
		],
		crosshair: true
	},
	yAxis: {
		min: 0,
		title: {
			text: '$'
		}
	},
	tooltip: {
		// head + 每个 point + footer 拼接成完整的 table
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	plotOptions: {
		column: {
			borderWidth: 0
		}
	},
	series: [{
		name: '1',
		data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
	}, {
		name: '2',
		data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
	}, {
		name: '3',
		data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
	}, {
		name: '4',
		data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
	}]
});

function DatePicker(beginSelector, endSelector, tips) {
	$(function() {
		var startDate = new Date();
		var endDate = new Date();
		$(beginSelector).datepicker().on("changeDate", function(ev) {
			if(ev.date.valueOf() > endDate.valueOf()) {
				$(tips).show().find("strong").text("The start date can not be greater then the end date");
				$(beginSelector).val("Choose Date")
			} else {
				$(tips).hide();
				startDate = new Date(ev.date)
			}
			$(beginSelector).datepicker("hide")
		});
		$(endSelector).datepicker().on("changeDate", function(ev) {
			if(ev.date.valueOf() < startDate.valueOf()) {
				$(tips).show().find("strong").text("The end date can not be less then the start date");
				$(endSelector).val("Choose Date")
			} else {
				$(tips).hide();
				endDate = new Date(ev.date)
			}
			$(endSelector).datepicker("hide")
		})
	})
}
DatePicker("#dp1", "#dp2", "#alert1");

$(document).ready(function() {
	$("#availableSystems button").click(function() {
		$(this).toggleClass("buttons-gray");
		if($(this).hasClass("buttons-gray")) {
			$(this).text("Simulating");
		} else {
			$(this).text("Simulate");
		}
	});

	$('input[name="my-checkbox"]').bootstrapSwitch('state', true, true);
	$(function() {
		$('#jstree').jstree({
			"plugins": ["wholerow", "checkbox"]
		});
	});
	$("#select-all").click(function() {
		$('#jstree').jstree('select_all');
	});
	$("#uncheck_all").click(function() {
		$('#jstree').jstree('uncheck_all');
	});

	$(function() {
		var Win_width = $(window).width();

		if(Win_width > 1199) {
			$(window).scroll(function() {
				if($(window).scrollTop() > 520) {
					$("#Settings").addClass("setting-page-fixed")
				} else {
					$("#Settings").removeClass("setting-page-fixed");
				}
			});
		}
	});
	$("#minimalBalanceTitle").mouseover(function() {
		$("#pop-minimal-balance").stop().fadeIn();
	}).mouseleave(function() {
		$("#pop-minimal-balance").stop().fadeOut();
	});
});