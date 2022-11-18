var chart = Highcharts.chart('gain-chart', {
	chart: {
		type: 'line',
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
		categories: ['11.01', '11.02', '11.03', '11.04', '11.05', '11.06', '11.07', '11.08', '11.09', '11.10', '11.11', '11.12']
	},
	yAxis: {
		tickInterval: 100,
		title: {
			text: null
		}
	},
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
				enabled: true, 
				formatter: function() {
					return this.point.y + '%'; 
				},
			},
		}
	},
	series: [{
		name: 'Equity',
		data: [-7777.0, 6000.9, 9000.5, 1.5, 1.4, 1.5, 1.2, 2060.5, 2300.3, 1080.3, 1003.9, 2009.6]
	}, {
		name: 'Balance',
		data: [3000.9, 2004.2, 1050.7, 1.5, 1.9, 1.2, 1.0, 6106.6, 8104.2, 4510.3, 5226.6, 5004.8]
	}]
});

var chart = Highcharts.chart('profit-chart', {
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
		categories: ['11.01', '11.02', '11.03', '11.04', '11.05', '11.06', '11.07', '11.08', '11.09', '11.10', '11.11', '11.12'],
		crosshair: true
	},
	yAxis: {
		title: {
			text: null
		}
	},
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
				enabled: true, 
				formatter: function() {
					return this.point.y + '%';
				},
			},
		}
	},
	series: [{
		name: 'Profit',
		data: [20, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
	}, {
		name: 'Profit',
		data: [30, 10, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 31.2]
	}, {
		name: 'Profit',
		data: [40, 40, 2.5, 0.7, 52.6, 75.5, 27.4, 90.4, 47.6, 39.1, 46.8, 11.1]
	}]
});


var chart = Highcharts.chart('containerMonth',{
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['2022.2', '2022.3', '2022.4', '2022.5', '2022.6', '2022.7', '2022.8', '2022.9', '2022.10', '2022.11']
    },
	credits: {
		enabled: false
	},
	series: [{
		name: 'Profit',
		data: [-7777.0, 6000.9, 9000.5, 1.5, 0,12,102,12.36,1200,-12]
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
		tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
	credits: {
		enabled: false
	},
		plotOptions: {
				pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
								enabled: false
						},
						showInLegend: true
				}
		},
		series: [{
				name: 'Brands',
				colorByPoint: true,
				data: [{
						name: 'EURGBP',
						y: 61.41,
						sliced: true,
						selected: true
				}, {
						name: 'GBPJPY',
						y: 11.84
				}, {
						name: 'AUDJPY',
						y: 10.85
				}, {
						name: 'GBPAUD',
						y: 4.67
				}, {
						name: 'EURUSD',
						y: 4.18
				}, {
						name: 'CADJPY',
						y: 7.05
				}, {
						name: 'USDCAD',
						y: 7.05
				}, {
						name: 'GBPNZD',
						y: 7.05
				}, {
						name: 'GBPUSD',
						y: 7.05
				}, {
						name: 'EURJPY',
						y: 7.05
				}, {
						name: 'GBPCHF',
						y: 7.05
				}, {
						name: 'NZDJPY',
						y: 7.05
				}]
		}]
});