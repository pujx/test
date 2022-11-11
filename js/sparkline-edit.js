$(function() {
	$('.dayliSparkline').sparkline('html', {
		type: 'line',
		width: 120,
		height: 24,
		lineColor: '#48cc7f',
		fillColor: false,
		spotRadius: 1.4,
		colorMap:{"2":"#ff0"}
	});
});