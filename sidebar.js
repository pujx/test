+ function($) {
	var DataKey = "fabadmin.layout";
	var Default = {
		slimscroll: true,
		resetHeight: true
	};
	var Selector = {
		wrapper: ".wrapper",
//		contentWrapper: ".content-wrapper",
		layoutBoxed: ".layout-boxed",
//		mainFooter: ".main-footer",
		mainHeader: ".main-header",
		sidebar: ".sidebar",
		controlSidebar: ".control-sidebar",
		fixed: ".fixed",
		sidebarMenu: ".sidebar-menu",
		logo: ".main-header .logo"
	};
	var ClassName = {
		fixed: "fixed",
		holdTransition: "hold-transition"
	};
	var Layout = function(options) {
		this.options = options;
		this.bindedResize = false;
		this.activate()
	};
	Layout.prototype.activate = function() {
		this.fix();
		this.fixSidebar();
		$("body").removeClass(ClassName.holdTransition);
		if(this.options.resetHeight) {
			$("body, html, " + Selector.wrapper).css({
				"height": "auto",
				"min-height": "100%"
			})
		}
		if(!this.bindedResize) {
			$(window).resize(function() {
				this.fix();
				this.fixSidebar();
				$(Selector.logo + ", " + Selector.sidebar).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
					this.fix();
					this.fixSidebar()
				}.bind(this))
			}.bind(this));
			this.bindedResize = true
		}
		$(Selector.sidebarMenu).on("expanded.tree", function() {
			this.fix();
			this.fixSidebar()
		}.bind(this));
		$(Selector.sidebarMenu).on("collapsed.tree", function() {
			this.fix();
			this.fixSidebar()
		}.bind(this))
	};
	Layout.prototype.fix = function() {
		$(Selector.layoutBoxed + " > " + Selector.wrapper).css("overflow", "hidden");
		var footerHeight = $(Selector.mainFooter).outerHeight() || 0;
		var neg = $(Selector.mainHeader).outerHeight() + footerHeight;
		var windowHeight = $(window).height();
		var sidebarHeight = $(Selector.sidebar).height() || 0;
		if($("body").hasClass(ClassName.fixed)) {
			$(Selector.contentWrapper).css("min-height", windowHeight - footerHeight)
		} else {
			var postSetHeight;
			if(windowHeight >= sidebarHeight) {
//				$(Selector.contentWrapper).css("min-height", windowHeight - neg);
				$(Selector.contentWrapper).css("min-height", windowHeight - footerHeight);
				postSetHeight = windowHeight - neg
			} else {
				$(Selector.contentWrapper).css("min-height", sidebarHeight - footerHeight);
				postSetHeight = sidebarHeight
			}
			var $controlSidebar = $(Selector.controlSidebar);
			if(typeof $controlSidebar !== "undefined") {
				if($controlSidebar.height() > postSetHeight) {
					$(Selector.contentWrapper).css("min-height", $controlSidebar.height())
				}
			}
		}
	};
	Layout.prototype.fixSidebar = function() {
		if(!$("body").hasClass(ClassName.fixed)) {
			if(typeof $.fn.slimScroll !== "undefined") {
				$(Selector.sidebar).slimScroll({
					destroy: true
				}).height("auto")
			}
			return
		}
		if(this.options.slimscroll) {
			if(typeof $.fn.slimScroll !== "undefined") {
				$(Selector.sidebar).slimScroll({
					destroy: true
				}).height("auto");
				$(Selector.sidebar).slimScroll({
					height: ($(window).height() - $(Selector.mainHeader).height()) + "px",
					color: "rgba(0,0,0,0.2)",
					size: "3px"
				})
			}
		}
	};

	function Plugin(option) {
		return this.each(function() {
			var $this = $(this);
			var data = $this.data(DataKey);
			if(!data) {
				var options = $.extend({}, Default, $this.data(), typeof option === "object" && option);
				$this.data(DataKey, (data = new Layout(options)))
			}
			if(typeof option == "string") {
				if(typeof data[option] == "undefined") {
					throw new Error("No method named " + option)
				}
				data[option]()
			}
		})
	}
	var old = $.fn.layout;
	$.fn.layout = Plugin;
	$.fn.layout.Constuctor = Layout;
	$.fn.layout.noConflict = function() {
		$.fn.layout = old;
		return this
	};
	$(window).on("load", function() {
		Plugin.call($("body"))
	})
}(jQuery) + function($) {
	var DataKey = "fabadmin.pushmenu";
	var Default = {
		collapseScreenSize: 991,
		expandOnHover: false,
		expandTransitionDelay: 200
	};
	var Selector = {
		collapsed: ".sidebar-collapse",
		open: ".sidebar-open",
		mainSidebar: ".main-sidebar",
		contentWrapper: ".content-wrapper",
		searchInput: ".sidebar-form .form-control",
		button: '[data-toggle="push-menu"]',
		mini: ".sidebar-mini",
		expanded: ".sidebar-expanded-on-hover",
		layoutFixed: ".fixed"
	};
	var ClassName = {
		collapsed: "sidebar-collapse",
		open: "sidebar-open",
		mini: "sidebar-mini",
		expanded: "sidebar-expanded-on-hover",
		expandFeature: "sidebar-mini-expand-feature",
		layoutFixed: "fixed"
	};
	var Event = {
		expanded: "expanded.pushMenu",
		collapsed: "collapsed.pushMenu"
	};
	var PushMenu = function(options) {
		this.options = options;
		this.init()
	};
	PushMenu.prototype.init = function() {
		if(this.options.expandOnHover || ($("body").is(Selector.mini + Selector.layoutFixed))) {
			this.expandOnHover();
			$("body").addClass(ClassName.expandFeature)
		}
		$(Selector.contentWrapper).on(function() {
			if($(window).width() <= this.options.collapseScreenSize && $("body").hasClass(ClassName.open)) {
				this.close()
			}
		}.bind(this));
		$(Selector.searchInput).on(function(e) {
			e.stopPropagation()
		})
	};
	PushMenu.prototype.toggle = function() {
		var windowWidth = $(window).width();
		var isOpen = !$("body").hasClass(ClassName.collapsed);
		if(windowWidth <= this.options.collapseScreenSize) {
			isOpen = $("body").hasClass(ClassName.open)
		}
		if(!isOpen) {
			this.open()
		} else {
			this.close()
		}
	};
	PushMenu.prototype.open = function() {
		var windowWidth = $(window).width();
		if(windowWidth > this.options.collapseScreenSize) {
			$("body").removeClass(ClassName.collapsed).trigger($.Event(Event.expanded))
		} else {
			$("body").addClass(ClassName.open).trigger($.Event(Event.expanded))
		}
	};
	PushMenu.prototype.close = function() {
		var windowWidth = $(window).width();
		if(windowWidth > this.options.collapseScreenSize) {
			$("body").addClass(ClassName.collapsed).trigger($.Event(Event.collapsed))
		} else {
			$("body").removeClass(ClassName.open + " " + ClassName.collapsed).trigger($.Event(Event.collapsed))
		}
	};
	PushMenu.prototype.expandOnHover = function() {
		$(Selector.mainSidebar).hover(function() {
			if($("body").is(Selector.mini + Selector.collapsed) && $(window).width() > this.options.collapseScreenSize) {
				this.expand()
			}
		}.bind(this), function() {
			if($("body").is(Selector.expanded)) {
				this.collapse()
			}
		}.bind(this))
	};
	PushMenu.prototype.expand = function() {
		setTimeout(function() {
			$("body").removeClass(ClassName.collapsed).addClass(ClassName.expanded)
		}, this.options.expandTransitionDelay)
	};
	PushMenu.prototype.collapse = function() {
		setTimeout(function() {
			$("body").removeClass(ClassName.expanded).addClass(ClassName.collapsed)
		}, this.options.expandTransitionDelay)
	};

	function Plugin(option) {
		return this.each(function() {
			var $this = $(this);
			var data = $this.data(DataKey);
			if(!data) {
				var options = $.extend({}, Default, $this.data(), typeof option === "object" && option);
				$this.data(DataKey, (data = new PushMenu(options)))
			}
			if(option == "toggle") {
				data.toggle()
			}
		})
	}
	var old = $.fn.pushMenu;
	$.fn.pushMenu = Plugin;
	$.fn.pushMenu.Constructor = PushMenu;
	$.fn.pushMenu.noConflict = function() {
		$.fn.pushMenu = old;
		return this
	};
	$(document).on("click", Selector.button, function(e) {
		e.preventDefault();
		Plugin.call($(this), "toggle")
	});
	$(window).on("load", function() {
		Plugin.call($(Selector.button))
	})
}(jQuery);