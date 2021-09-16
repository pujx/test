$(document).ready(function() {

	function mouseIn(beginIn, endIn) {
		$(function() {
			$(beginIn).mouseover(function() {
				$(endIn).stop().fadeIn();
			}).mouseleave(function() {
				$(endIn).stop().fadeOut();
			});
		});
	}
	mouseIn("#minimalBalanceTitle", "#pop-minimal-balance");
    mouseIn("#mainRiskTip","#pop-mainRiskTip");
	// 公共配置
	Highcharts.setOptions({
		chart: {
			type: 'solidgauge'
		},
		title: null,
		pane: {
			center: ['50%', '85%'],
			size: '140%',
			startAngle: -90,
			endAngle: 90,
			background: {
				backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
				innerRadius: '60%',
				outerRadius: '100%',
				shape: 'arc'
			}
		},
		tooltip: {
			enabled: false
		},
		yAxis: {
			stops: [
				[0.1, '#55BF3B'], // green
				[0.5, '#DDDF0D'], // yellow
				[0.9, '#DF5353'] // red
			],
			lineWidth: 0,
			minorTickInterval: null,
			tickPixelInterval: 400,
			tickWidth: 0,
			title: {
				y: -70
			},
			labels: {
				y: 16
			}
		},
		plotOptions: {
			solidgauge: {
				dataLabels: {
					y: 5,
					borderWidth: 0,
					useHTML: true
				}
			}
		}
	});
	// 速度仪表
	var chart1 = Highcharts.chart('recommendedBalance', {
		yAxis: {
			min: 0,
			max: 200,
			title: {
				text: ''
			}
		},
		credits: {
			enabled: false
		},
		series: [{
			name: '速度',
			data: [80],
			dataLabels: {
				format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span>' +
					'%'
			},
			tooltip: {
				valueSuffix: ' km/h'
			}
		}]
	});

	$('#mainRiskTip,#rankTip,#minimal-balance-tip,#multiplier,#controls').popover();

});