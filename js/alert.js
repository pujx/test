(function($, window, document, undefined) {
	var PARAMS;
	var DEFAULTPARAMS = {
		Content: "",
	};
	$.DialogByZ = {
		Autofade: function(params) {
			Show(params, "Autofade")
		},
	};
	function Init(params) {
		if(params != undefined && params != null) {
			PARAMS = $.extend({}, DEFAULTPARAMS, params);
		}
	};

	function Show(params, caller) {
		Init(params);
		var dislogContainer;
		var blackFilter = $('<div class="zbox-popup-backdrop" style="display: block;"></div>');
		if(caller == 'Autofade') {
			dislogContainer = $('<div class="zbox-toast-container error-box"><div class="error-help-block d-flex align-items-center"><p><img src="images/login-error.svg"></p><div class="zbox-toast-message">' +
				PARAMS.Content + '</div></div></div>');
			$("body").append(dislogContainer);
			setTimeout(function() {
				$(".zbox-toast-container").addClass('zbox-active');
			}, 20)
			setTimeout(function() {
				$(".zbox-toast-container").remove();
			}, 5000)
		}
	}
})(jQuery, window, document);