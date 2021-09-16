//loading效果仅在PC端呈现
$(function() {
	if(!navigator.userAgent.match(/mobile/i)) {

		! function(e) {
			NProgress.start(), e(window).bind("load", function() {
				return NProgress.done(), !1
			})
		}(jQuery);

	}
}) 