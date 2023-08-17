$(window).resize(function() 
{    
    chart.setSize(
       $(document).width(), 
       $(document).height()/2,
       false
    );   
});
Highcharts.setOptions({
    colors: ['#0BAB47'],
    backgroundColor: ["#cafedd"],
});
var chart = Highcharts.chart('clients-chart', {
    accessibility: {
        enabled: false,
    },
    chart: {
        type: 'areaspline',
        style: {
            fontFamily: "'Inter',sans-serif,'Noto Sans SC','Microsoft YaHei'",

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
        categories: ['June 1st', 'June 2st', 'June 3st', 'June 4st', 'June 5st', 'June 6st', 'June 7st', 'June 8st', 'June 9st', 'June 10st', 'June 11st', 'June 12st'],
        labels: {
            style: {
                color: '#425E6E'
            }
        },
        tickColor: '#BECAD6',
        tickWidth: 1,
        tickLength: 6,
        tickmarkPlacement: 'on',
        lineColor: "#BECAD6"
    },
    yAxis: {
        // tickInterval: 20,
        title: {
            text: null
        },
        gridLineDashStyle: 'longdash',
        gridLineColor: "#C3D0D9"
    },
    // tooltip: {
    // 	headerFormat: '<table>',
    // 	pointFormat: '<tr>' +
    // 		'<td style="padding:0">{point.y}</td></tr>',
    // 	footerFormat: '</table>',
    // 	shared: true,
    // 	useHTML: true,
    // 	backgroundColor: '#122D3C',
    // 	borderColor: '#122D3C',
    // 	borderRadius: 4,
    // 	padding: 4,
    // 	style: {
    // 		color: '#ffffff',
    // 	}
    // },
    tooltip: {
        headerFormat: '<table>',
        pointFormat: '<tr><td style="padding:0">{series.name}: &nbsp;</td>' +
            '<td style="padding:0"><b>{point.y}&nbsp;</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        backgroundColor: '#122D3C',
        borderColor: '#122D3C',
        borderRadius: 4,
        padding: 4,
        style: {
            color: '#ffffff',
        }
    },
    plotOptions: {
        series: {
            borderWidth: 2,
            color: '#0BAB47',
            lineColor: 'transparent',
            fillColor: {
                linearGradient: [255, 255, 255, 10],
                stops: [
                    [0, Highcharts.color(Highcharts.getOptions().backgroundColor[0]).setOpacity(0).get('rgba')],
                    [1, Highcharts.getOptions().backgroundColor[0]]
                ]
            },
            events: {
                legendItemClick: function (e) {
                    return false;
                }
            },
            marker: {
                radius: 0,
                lineWidth: 0,
                states: {
                    hover: {
                        radius: 8,
                        lineWidth: 2,
                        lineColor: '#FFFFFF',
                        fillColor: '#0BAB47',
                    }
                }
            },
        }
    },
    series: [{
        name: 'New Clients',
        data: [0, 1, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0],
        color: '#0BAB47',
        showInLegend: false
    }]
});

// deposit
var chart = Highcharts.chart('deposits-chart', {

    accessibility: {
        enabled: false,
    },
    chart: {
        type: 'areaspline',
        style: {
            fontFamily: "'Inter',sans-serif,'Noto Sans SC','Microsoft YaHei'",
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
        categories: ['June 1st', 'June 2st', 'June 3st', 'June 4st', 'June 5st', 'June 6st', 'June 7st', 'June 8st', 'June 9st', 'June 10st', 'June 11st', 'June 12st'],
        labels: {
            style: {
                color: '#425E6E'
            }
        },
        tickColor: '#BECAD6',
        tickWidth: 1,
        tickLength: 6,
        tickmarkPlacement: 'on',
        lineColor: "#BECAD6"
    },
    yAxis: {
        // tickInterval: 20,
        title: {
            text: null
        },
        gridLineDashStyle: 'longdash',
        gridLineColor: "#C3D0D9"
    },
    tooltip: {
        headerFormat: '<table>',
        pointFormat: '<tr><td style="padding:0">{series.name}:&nbsp;</td>' +
            '<td style="padding:0"><b>$ {point.y:.2f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        backgroundColor: '#122D3C',
        borderColor: '#122D3C',
        borderRadius: 4,
        padding: 4,
        style: {
            color: '#ffffff',
        }
    },

    plotOptions: {
        series: {
            borderWidth: 2,
            color: '#0BAB47',
            lineColor: 'transparent',
            fillColor: {
                linearGradient: [255, 255, 255, 10],
                stops: [
                    [0, Highcharts.color(Highcharts.getOptions().backgroundColor[0]).setOpacity(0).get('rgba')],
                    [1, Highcharts.getOptions().backgroundColor[0]]
                ]
            },
            events: {
                legendItemClick: function (e) {
                    return false;
                }
            },
            marker: {
                radius: 0,
                lineWidth: 0,
                states: {
                    hover: {
                        radius: 8,
                        lineWidth: 2,
                        lineColor: '#FFFFFF',
                        fillColor: '#0BAB47',
                    }
                }
            },
        }
    },
    series: [{
        name: 'New Deposits',
        data: [13, 22, 32, 44, 56, 23, 23, 44, 66, 28, 39, 29],
        color: '#0BAB47',
        showInLegend: false
    }]
});

// withdrawal
var chart = Highcharts.chart('withdrawals-chart', {

    accessibility: {
        enabled: false,
    },
    chart: {
        type: 'areaspline',
        style: {
            fontFamily: "'Inter',sans-serif,'Noto Sans SC','Microsoft YaHei'",
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
        categories: ['June 1st', 'June 2st', 'June 3st', 'June 4st', 'June 5st', 'June 6st', 'June 7st', 'June 8st', 'June 9st', 'June 10st', 'June 11st', 'June 12st'],
        labels: {
            style: {
                color: '#425E6E'
            }
        },
        tickColor: '#BECAD6',
        tickWidth: 1,
        tickLength: 6,
        tickmarkPlacement: 'on',
        lineColor: "#BECAD6"
    },
    yAxis: {
        // tickInterval: 20,
        title: {
            text: null
        },
        gridLineDashStyle: 'longdash',
        gridLineColor: "#C3D0D9"
    },
    tooltip: {
        headerFormat: '<table>',
        pointFormat: '<tr><td style="padding:0">{series.name}:&nbsp;</td>' +
            '<td style="padding:0"><b>$ {point.y:.2f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        backgroundColor: '#122D3C',
        borderColor: '#122D3C',
        borderRadius: 4,
        padding: 4,
        style: {
            color: '#ffffff',
        }
    },
    plotOptions: {
        series: {
            borderWidth: 2,
            color: '#0BAB47',
            lineColor: 'transparent',
            fillColor: {
                linearGradient: [255, 255, 255, 10],
                stops: [
                    [0, Highcharts.color(Highcharts.getOptions().backgroundColor[0]).setOpacity(0).get('rgba')],
                    [1, Highcharts.getOptions().backgroundColor[0]]
                ]
            },
            events: {
                legendItemClick: function (e) {
                    return false;
                }
            },
            marker: {
                radius: 0,
                lineWidth: 0,
                states: {
                    hover: {
                        radius: 8,
                        lineWidth: 2,
                        lineColor: '#FFFFFF',
                        fillColor: '#0BAB47',
                    }
                }
            },
        }
    },
    series: [{
        name: 'New Withdrawals',
        data: [13, 22, 32, 44, 56, 23, 23, 44, 66, 28, 39, 29],
        color: '#0BAB47',
        showInLegend: false
    }]
});