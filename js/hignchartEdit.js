var chart = Highcharts.chart('container', {
	chart: {
		type: 'spline',
		marginTop: 50
	},
	title: {
		text: "",
//		layout: 'vertical',
//		align: 'left',
//		verticalAlign: 'top',
//		borderWidth: 0,
//		style: {
//			fontWeight: "bold",
//			fontSize: "16",
//			color: "#333",
//		}

	},
	xAxis: {
		categories: ['一月', '二月', '三月', '四月', '五月', '六月',
			'七月', '八月', '九月', '十月', '十一月', '十二月'
		],
	},
	navigation: {
		buttonOptions: {}
	},
	//
	legend: {
		enabled: false
	},
	yAxis: {
		title: {
			text: '单位（$）'
		},
		labels: {
			formatter: function() {
				return this.value;
			}
		}
	},
	credits: {
		enabled: false // 禁用版权信息
	},
	colors: ['#f44336', '#003b4c'],

	tooltip: {
		crosshairs: true,
		shared: true
	},
	plotOptions: {
		spline: {
			marker: {
				radius: 4,
				lineColor: '#fff',
				lineWidth: 1
			}
		}
	},
	series: [{
		name: '新入金',
		marker: {
			symbol: 'cirel'
		},
		data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
			y: 26.5,
		}, 23.3, 18.3, 13.9, 9.6]
	}, {
		name: '总计',
		marker: {
			symbol: 'cirel'
		},
		data: [{
			y: 3.9,
		}, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	}]
});






var chart = Highcharts.chart('container1', {
	chart: {
		
		type: 'column',
		zoomType: 'x',
		resetZoomButton: {
			theme: {
				fill: 'white',
				stroke: '#ccc',
				r: 4,
				states: {
					hover: {
						fill: '#48cc7f',
						style: {
							color: 'white',
						}
					}
				}
			}
		}
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
		categories: [
			'一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
		],
		crosshair: true
	},
	yAxis: {
		title: {
			text: null
		}
	},
	colors: ['#6993ff', '#003b4c','#f44336'],
	tooltip: {
		// head + 每个 point + footer 拼接成完整的 table
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			'<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	
	plotOptions: {
		series: {
			dataLabels: {
				enabled: true, //设置柱状图显示数值
				formatter: function() {
					return this.point.y + '%'; // 设置柱状图显示数值并且带单位
				},
			},
		}
	},
	series: [{
		name: 'Drawdown',
		data: [20, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
	}, {
		name: 'Test 1',
		data: [30, 10, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 31.2]
	}, {
		name: 'Test 2',
		data: [40, 40, 2.5, 0.7, 52.6, 75.5, 27.4, 90.4, 47.6, 39.1, 46.8, 11.1]
	}]
});

var chart = Highcharts.chart('container2', {
	chart: {
		type: 'spline',
		marginTop: 50
	},
	title: {
		text: "",
//		layout: 'vertical',
//		align: 'left',
//		verticalAlign: 'top',
//		borderWidth: 0,
//		style: {
//			fontWeight: "bold",
//			fontSize: "16",
//			color: "#333",
//		}

	},
	xAxis: {
		categories: ['一月', '二月', '三月', '四月', '五月', '六月',
			'七月', '八月', '九月', '十月', '十一月', '十二月'
		],
	},
	navigation: {
		buttonOptions: {}
	},
	//
	legend: {
		enabled: false
	},
	yAxis: {
		title: {
			text: '单位（$）'
		},
		labels: {
			formatter: function() {
				return this.value;
			}
		}
	},
	credits: {
		enabled: false // 禁用版权信息
	},
	colors: ['#f44336', '#003b4c'],

	tooltip: {
		crosshairs: true,
		shared: true
	},
	plotOptions: {
		spline: {
			marker: {
				radius: 4,
				lineColor: '#fff',
				lineWidth: 1
			}
		}
	},
	series: [{
		name: '新入金',
		marker: {
			symbol: 'cirel'
		},
		data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
			y: 26.5,
		}, 23.3, 18.3, 13.9, 9.6]
	}, {
		name: '总计',
		marker: {
			symbol: 'cirel'
		},
		data: [{
			y: 3.9,
		}, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	}]
});


Highcharts.chart('containerCurrencies', {
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		type: 'pie'
	},
	title: {
		text: ''
	},
	credits: {
		enabled: false
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.3f}%</b>'
	},

	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: true,
				format: '<b>{point.name}</b>: {point.percentage:.3f} %',
				style: {
					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				}
			},
			showInLegend: true
		}
	},
	series: [{
		name: '',
		colorByPoint: true,
		data: [{
				name: '0',
				y: 5.41,
				sliced: true,
				selected: true
			}, {
				name: '1',
				y: 11.84
			}, {
				name: '2',
				y: 10.85
			}, {
				name: '3',
				y: 4.67
			}, {
				name: '4',
				y: 4.18
			}, {
				name: 'S5',
				y: 5.64
			}, {
				name: '6',
				y: 0.59
			},
			{
				name: '6.2',
				y: 0.01
			}, {
				name: '7',
				y: 3.2
			}, {
				name: '8',
				y: 2.61
			}, {
				name: '9',
				y: 16.84
			}, {
				name: '10',
				y: 11.84
			}, {
				name: '11',
				y: 11.84
			}, {
				name: '12',
				y: 11.84
			}, {
				name: '13',
				y: 11.84
			}, {
				name: '14r',
				y: 11.84
			}
		]
	}]
});

var chart = Highcharts.chart('containerMonth', {
	chart: {
		type: 'column'
	},
	title: {
		text: ''
	},
	colors: ['#6993ff', '#003b4c','#f44336'],
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			'<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	plotOptions: {
		series: {
			dataLabels: {
				enabled: true, //设置柱状图显示数值
				formatter: function() {
					return this.point.y + '%'; // 设置柱状图显示数值并且带单位
				},
			},
		}
	},
	credits: {
		enabled: false
	},
	xAxis: {
		categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
	},
	series: [{
		name: '小张',
		data: [5, 3, 4, 7, 2]
	}, {
		name: '小彭',
		data: [2, -2, -3, 2, 1]
	}, {
		name: '小潘',
		data: [3, 4, 4, -2, 5]
	}]
});