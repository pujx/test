function extend(obj1, obj2) {
	for(var attr in obj2) {
		obj1[attr] = obj2[attr];
	}
}

function SetStep(arg) {
	this.body = document.body;
	this.opt = {
		show: false,
		content: '.stepCont',
		pageCont: '.pageCont',
		imgWidth: 20,
		stepContainerMar: 20,
		nextBtn: '.nextBtn',
		prevBtn: '.prevBtn',
		steps: ['1', '2', '3', '4', '5', '6', '7', '8'],
		stepCounts: 8,
		curStep: 1,
		animating: false,
		showBtn: true,
		onLoad: function() {}
	}
	this.init(arg)
}
SetStep.prototype.init = function(arg) {
	var _that = this;
	extend(this.opt, arg);
	this.opt.stepCounts = this.opt.steps.length;
	this.content = $(this.opt.content);
	this.pageCont = this.content.find(this.opt.pageCont)
	var w_con = $(this.content).width();
	var w_li = (w_con - this.opt.stepContainerMar * 2) / this.opt.stepCounts / 2;
	var stepContainer = this.content.find('.ystep-container');
	this.stepContainer = stepContainer;
	var stepsHtml = $("<ul class='ystep-container-steps'></ul>");
	var stepDisc = "<li class='ystep-step ystep-step-undone'></li>";
	var stepP = $("<div class='ystep-progress'>" +
		"<p class='ystep-progress-bar'><span class='ystep-progress-highlight' style='width:0%'></span></p>" +
		"</div>");
	for(var i = 0; i < this.opt.stepCounts; i++) {
		if(i == 0) {
			var _s = $(stepDisc).text(this.opt.steps[i]).addClass('')
		} else {
			var _s = $(stepDisc).text(this.opt.steps[i])
		}
		stepsHtml.append(_s);
	}
	stepsHtml.find('li').css('width', '40px').css('marginRight', w_li * 2 - 40)
	stepContainer.append(stepsHtml).append(stepP);
	this.setProgress(this.stepContainer, this.opt.curStep, this.opt.stepCounts)
	if(this.opt.showBtn) {
		this.prevBtn = this.content.find(this.opt.prevBtn)
		this.nextBtn = this.content.find(this.opt.nextBtn)
		this.prevBtn.on('click', function() {
			if($(_that).attr('disabled') || _that.opt.animating) {
				return false;
			} else {
				_that.opt.animating = true;
				_that.opt.curStep--;
				_that.setProgress(_that.stepContainer, _that.opt.curStep, _that.opt.stepCounts)
			}
		});

		this.nextBtn.on('click', function() {
			//		 表单验证样式 示例
			var familyname = $('#familyname').val();
			if(familyname == "") {
				$.DialogByZ.Autofade({
					Content: "Family name is empty!"
				});
				$('#familyname').css("border-color", "#e86060");
				return false;
			};
			//  表单验证样式 示例 end
			if($(_that).attr('disabled') || _that.opt.animating) {
				return false;
			} else {
				_that.opt.animating = true;
				_that.opt.curStep++;
				_that.setProgress(_that.stepContainer, _that.opt.curStep, _that.opt.stepCounts);

			}

		})
	}
	$(window).resize(function() {
		var w_con = $(_that.content).width();
		var w_li = w_con / _that.opt.stepCounts / 2;
		stepsHtml.find('li').css('width', '40px').css('marginRight', w_li * 2 - 40);

	})
}
SetStep.prototype.setProgress = function(n, curIndex, stepsLen) {
	var _that = this;
	var $steps = $(n).find("li");
	var $progress = $(n).find(".ystep-progress-highlight");
	if(1 <= curIndex && curIndex <= $steps.length) {
		var scale = "%";
		scale = Math.round((curIndex - 1) * 100 / ($steps.length - 1)) + scale;
		$progress.animate({
			width: scale
		}, {
			speed: 1000,
			done: function() {
				if(_that.opt.showBtn) {
					if(curIndex == 1) {
						_that.prevBtn.hide();
						_that.nextBtn.show();
					} else if(curIndex == stepsLen) {
						_that.prevBtn.show();
						_that.nextBtn.hide();
						$(".ystep-container").hide();

						function jump(count) {
							window.setTimeout(function() {
								count--;
								if(count > 0) {
									$('#num').text(count);
									jump(count);
								} else {
									location.href = "http://14.192.67.34:2001/";
								}
							}, 1000);
						}
						jump(20);

					} else if(1 < curIndex < stepsLen) {
						_that.prevBtn.show();
						_that.nextBtn.show();
					}
				}
				_that.checkPage(_that.pageCont, _that.opt.curStep, _that.opt.stepCounts)
				_that.opt.animating = false;
			}
		});
	} else {
		return false;
	}
}
SetStep.prototype.checkPage = function(pageCont, curStep, steps) {
	for(var i = 1; i <= steps; i++) {
		if(i === curStep) {
			var findPageCont = pageCont.find('#page' + i)
			if($(this.body).width() <= 991) {
				this.content.css("height", findPageCont.children('.step' + i)[0].scrollHeight + 70);
				
			}
			findPageCont.css("left", "0");
		} else if(curStep > i) {
			pageCont.find('#page' + i).css("left", "-200vw");
				$('body,html').animate({
							scrollTop: 0
						},
						500);
		} else {
			pageCont.find('#page' + i).css("left", "200vw");
				$('body,html').animate({
							scrollTop: 0
						},
						500);
		}
	}
};
