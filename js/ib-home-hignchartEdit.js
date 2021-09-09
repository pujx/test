$(function() {
	var $window = $(window),
		didScroll = false,
		skillsTop = $('#customer-IB').offset().top - 600; //the point at which we will create the chart
	skillsTop1 = $('#deposit').offset().top - 600;
	skillsTop2 = $('#withdrawal').offset().top - 600;

	$window.on('scroll', function() {
		didScroll = true;
	});

	//check every 250ms if user has scrolled to the skills section
	setInterval(function() {
		if(didScroll) {
			didScroll = false;
			if($window.scrollTop() >= skillsTop) {
				$window.off('scroll');
				createChart();
				setInterval(function(){});
				
				$(window).on("scroll", function() {
					if($window.scrollTop() >= skillsTop1) {
						$window.off('scroll');
						createChart1();
						$(window).on("scroll", function() {
							if($window.scrollTop() >= skillsTop2) {
								$window.off('scroll');
								createChart2();
							}

						})
					}

				});
			}
		}
	}, 250);

	function createChart() {
		$('#customer-IB').highcharts({
			chart: {
				type: 'spline',
				marginTop: 50
			},
			title: {
				text: "",

			},
			xAxis: {
				categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
					'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'
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
					text: ''
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
			colors: ['#003b4d'],

			tooltip: {
				crosshairs: true,
				shared: true,
				style: {
					color: '#595757',
					fontSize: '14px',
					fontFamily: "Lato Regular",
				}
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
				name: 'Total Trading Volumes',
				marker: {
					symbol: 'cirel'
				},
				data: [{
					y: 3.9,
				}, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}]
		});

		$('#customer').highcharts({
			title: {
				text: '',
			},
			colors: ['#003b4d', '#98cbdb'],
			tooltip: {
				pointFormat: '{series.name} <b>{point.percentage:.1f}%</b>',
				style: {
					color: '#595757',
					fontSize: '14px',
					fontFamily: "Lato Regular",
				}
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: '#595757',
							fontSize: '14px',
							fontFamily: "Lato Regular",
						}
					},
				}
			},
			series: [{
				type: 'pie',
				innerSize: '80%',
				name: '',
				data: [

					['New Clients', 82],
					['Total Clients', 12],
				]
			}]
		});

	};

	function createChart1() {
		$('#deposit').highcharts({
			chart: {
				type: 'spline'
			},
			title: {
				text: '',

			},
			xAxis: {
				categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
					'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'
				],
			},
			navigation: {
				buttonOptions: {}
			},
			legend: {
				enabled: false
			},

			yAxis: {
				title: {
					text: ''
				},
				labels: {
					formatter: function() {
						return this.value;
					}
				},

			},
			credits: {
				enabled: false // 禁用版权信息
			},
			colors: ['#595757', '#003b4d'],

			tooltip: {
				crosshairs: true,
				shared: true,
				style: {
					color: '#595757',
					fontSize: '14px',
					fontFamily: "Lato Regular",
				}
			},
			plotOptions: {
				spline: {
					marker: {
						radius: 4,
						lineColor: '#fff',
						lineWidth: 1
					}
				},
			},

			series: [{
				name: '新增代理',
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

	};

	function createChart2() {
		$('#withdrawal').highcharts({
			chart: {
				type: 'spline'
			},
			title: {
				text: '',

			},
			xAxis: {
				categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
					'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'
				],
			},
			navigation: {
				buttonOptions: {}
			},
			legend: {
				enabled: false
			},

			yAxis: {
				title: {
					text: ''
				},
				labels: {
					formatter: function() {
						return this.value;
					}
				},

			},
			credits: {
				enabled: false // 禁用版权信息
			},
			colors: ['#595757', '#003b4d'],

			tooltip: {
				crosshairs: true,
				shared: true,
				style: {
					color: '#595757',
					fontSize: '14px',
					fontFamily: "Lato Regular",
				}
			},
			plotOptions: {
				spline: {
					marker: {
						radius: 4,
						lineColor: '#fff',
						lineWidth: 1
					}
				},
			},

			series: [{
				name: '新增代理',
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

	};

});

$(document).ready(function() {
	var scrollEvent = new Event('scroll');
	window.dispatchEvent(scrollEvent);
});