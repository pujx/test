$(function() {
	var aLi = $(".carousel_box li");
	var iNow = 0;

	function move1() {
		aLi.eq(iNow).siblings().stop().animate({
			opacity: 0
		}, 800);
		aLi.eq(iNow).stop().animate({
			opacity: 1
		}, 800)
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



//(function()
//{
//var bgCounter = -1,
//  backgrounds = [
//    "images/loginBg1.jpg",
//    "images/loginBg2.jpg",
//    "images/loginBg3.jpg",
//    "images/loginBg4.jpg",
//    "images/loginBg5.jpg"
//  ];
//function changeBackground()
//{
//  bgCounter = (bgCounter+1) % backgrounds.length;
//  $('body').css('background', 'url('+backgrounds[bgCounter]+') no-repeat');
//  setTimeout(changeBackground, 5000);
//}
//changeBackground();
//})();










$(function() {
	var year = new Date();
	var footYear = year.getFullYear();
	$(".footer-year").text(footYear);
});

$(function() {
	$(window).on('load', function() {
		$('#preloader1').delay(150).fadeOut('slow');
		$('body').delay(150).css({
			'overflow': 'visible'
		});
	})
	$('.language-toogle').on('click', function() {
		$(this).toggleClass("language-active").siblings().removeClass("language-active");
		if($(this).hasClass("language-active")) {
			$('.scale-up').stop().fadeIn();
		} else {
			$('.scale-up').stop().fadeOut();
		}
	});
	$(".scale-up,.language-toogle").on("click", function(e) {
		e.stopPropagation();
	});
	$(document).click(function(e) {
		var _con = $(".language-toogle");
		if(!_con.is(e.target) && _con.has(e.target).length === 0) {
			$(".language-toogle").removeClass("language-active");
			$('.scale-up').stop().fadeOut();
		}
	});

});