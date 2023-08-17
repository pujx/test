$(function () {
    Chart.defaults.font.family = "'Inter',sans-serif,'Noto Sans SC','Microsoft YaHei'";
    var ctx = document.getElementById("lineChart").getContext('2d');
    var gradient = ctx.createLinearGradient(255, 255, 255, 10);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(52, 251, 127, 0.3)');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['June 1st', 'June 2st', 'June 3st', 'June 4st', 'June 5st', 'June 6st', 'June 7st', 'June 8st', 'June 9st', 'June 10st', 'June 11st', 'June 12st'],
            datasets: [{
                label: 'New Clients',
                data: [30, 22, 32, 44, 56, 23, 253, 90, 66, 24, 39, 29],
                borderWidth: 2,
                borderColor: ['transparent'],
                backgroundColor: "#0BAB47",
                pointStyle: true,
                pointRadius: 0.01,
                pointHoverRadius: 9,
                hoverBorderWidth: 2,
                hoverBorderColor: "#ffffff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                lineTension: 0.4,
                fill: {
                    target: 'origin',
                    above: gradient,
                    below: gradient
                },
            }]
        },
        options: {
            interaction: {
                intersect: false,
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    position: 'bottom',
                    grid: {
                        color: 'transparent',
                        tickColor: "#BECAD6",
                    },
                    ticks: {
                        display: true,
                        color: "#425E6E",
                        font: {
                            size: 11
                        }
                    },
                },
                y: {
                    ticks: {
                        beginAtZero: true,
                        callback: function (value) { if (value % 1 === 0) { return value; } },
                        color: "#425E6E",
                        // stepSize:20
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        borderDash: [4, 4],
                        drawBorder: false,
                        color: ["#BECAD6"],
                        tickColor: "transparent"
                    },
                },
            },
            plugins: {
                legend: false,
                tooltip: {
                    displayColors: false,
                    multiKeyBackground: '#ffffff',
                    yAlign: 'bottom',
                    callbacks: {
                        title: () => { },
                    },
                    backgroundColor: "#122D3C",
                }
            },
        }
    });
});


$(function () {
    Chart.defaults.font.family = "'Inter',sans-serif,'Noto Sans SC','Microsoft YaHei'";
    var ctx1 = document.getElementById("lineChart1").getContext('2d');
    var gradient = ctx1.createLinearGradient(255, 255, 255, 10);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(52, 251, 127, 0.3)');
    var myChart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['June 1st', 'June 2st', 'June 3st', 'June 4st', 'June 5st', 'June 6st', 'June 7st', 'June 8st', 'June 9st', 'June 10st', 'June 11st', 'June 12st'],
            datasets: [{
                label: 'New Deposits',
                data: [22.00, 1258.26, 32, 44, 56, 23, 23, 44, 66, 28, 39, 29],
                borderWidth: 2,
                borderColor: ['transparent'],
                backgroundColor: "#0BAB47",
                pointStyle: true,
                pointRadius: 0.01,
                pointHoverRadius: 9,
                hoverBorderWidth: 2,
                hoverBorderColor: "#ffffff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                lineTension: 0.4,
                fill: {
                    target: 'origin',
                    above: gradient,
                    below: gradient
                },
            }]
        },
        options: {
            animations: false,
            interaction: {
                intersect: false,
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    position: 'bottom',
                    grid: {
                        color: 'transparent',
                        tickColor: "#BECAD6",
                    },
                    ticks: {
                        display: true,
                        color: "#425E6E",
                        font: {
                            size: 11
                        }
                    },
                },
                y: {
                    ticks: {
                        beginAtZero: true,
                        callback: function (value) { if (value % 1 === 0) { return value; } },
                        color: "#425E6E",
                        font: {
                            size: 11
                        }
                        // stepSize:20
                    },
                    grid: {
                        borderDash: [4, 4],
                        drawBorder: false,
                        color: ["#BECAD6"],
                        tickColor: "transparent"
                    },
                },
            },
            plugins: {
                legend: false,
                tooltip: {
                    displayColors: false,
                    multiKeyBackground: '#ffffff',
                    yAlign: 'bottom',
                    callbacks: {
                        title: () => { },
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                            }
                            return label;
                        },
                    },
                    backgroundColor: "#122D3C",
                }
            },
        }
    });
});
$(function () {
    Chart.defaults.font.family = "'Inter',sans-serif,'Noto Sans SC','Microsoft YaHei'";
    var ctx2 = document.getElementById("lineChart2").getContext('2d');
    var gradient = ctx2.createLinearGradient(255, 255, 255, 10);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(52, 251, 127, 0.3)');
    var myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['June 1st', 'June 2st', 'June 3st', 'June 4st', 'June 5st', 'June 6st', 'June 7st', 'June 8st', 'June 9st', 'June 10st', 'June 11st', 'June 12st'],
            datasets: [{
                label: 'New Withdrawals',
                data: [80.23, 22.365, 322.34, 158.264, 12.356, 12.23, 230.69, 44.54, 606, 28.25, 39.89, 29],
                borderWidth: 2,
                borderColor: ['transparent'],
                backgroundColor: "#0BAB47",
                pointStyle: true,
                pointRadius: 0.01,
                pointHoverRadius: 9,
                hoverBorderWidth: 2,
                hoverBorderColor: "#ffffff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                lineTension: 0.4,
                fill: {
                    target: 'origin',
                    above: gradient,
                    below: gradient
                },
            }]
        },
        options: {
            animations: false,
            interaction: {
                intersect: false,
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    position: 'bottom',
                    grid: {
                        color: 'transparent',
                        tickColor: "#BECAD6",
                    },
                    ticks: {
                        display: true,
                        color: "#425E6E",
                        font: {
                            size: 11
                        }
                    },
                },
                y: {
                    ticks: {
                        beginAtZero: true,
                        callback: function (value) { if (value % 1 === 0) { return value; } },
                        color: "#425E6E",
                        font: {
                            size: 11
                        },
                    },
                    grid: {
                        borderDash: [4, 4],
                        drawBorder: false,
                        color: ["#BECAD6"],
                        tickColor: "transparent"
                    },
                },
            },
            plugins: {
                legend: false,
                tooltip: {
                    displayColors: false,
                    multiKeyBackground: '#ffffff',
                    yAlign: 'bottom',
                    callbacks: {
                        title: () => { },
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                            }
                            return label;
                        },
                    },
                    backgroundColor: "#122D3C",
                }
            },
        }
    });
});


