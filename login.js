$(function() {
	var aLi = $(".carousel_box li");
	var iNow = 0;

	function move1() {
		aLi.eq(iNow).siblings().stop().animate({
			opacity: 0
		}, 1000);
		aLi.eq(iNow).stop().animate({
			opacity: 1
		}, 1000)
	}

	function run2() {
		iNow++;
		if(iNow > 3) {
			iNow = 0
		}
		move1()
	}
	timer = setInterval(run2, 5000)
});