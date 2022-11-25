$(function() {
	$('.content-modal').on('hide.bs.modal', function() {
		$(".fund-piaochecked").removeClass("on");
		$(".apply-next").attr("disabled", true);
	});
	var banner_count = $(".bonus-slider figure").toArray();
	if(banner_count.length >= 2) {
		$(".bonus-slider").owlCarousel({
			loop: true,
			dots: true,
			items: 1,
			autoplay: true,
			autoplayTimeout: 7500,
			smartSpeed: 1500,
			nav: true,
			navText: ['<span title="Previous"></span>', '<span title="Next"></span>'],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				1200: {
					dots: false
				}
			}
		});
	};
	

  $('.toogle-icon').click(function() {
    var hl_content = $(this).parent().parent().parent().children('.hl-content');
    if (hl_content.is(':visible')) {
    	$(this).parent().children('ul').find('.account-balance').fadeIn();
     	hl_content.slideUp();
    	$(this).parent().parent().parent().removeClass('open');
    } else {
    	$(this).parent().parent().parent().addClass('open');
      	hl_content.slideDown(); 
    	$(this).parent().children('ul').find('.account-balance').fadeOut();
      	$(this).parent().parent().parent().siblings().removeClass('open').find('.hl-content').slideUp();
      	$(this).parent().parent().parent().siblings().children('.hl-click').find('.account-balance').fadeIn();
    }
  });
});