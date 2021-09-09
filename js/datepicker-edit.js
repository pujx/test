			function DatePicker(beginSelector, endSelector, tips) {
				$(function() {
					var startDate = new Date();
					var endDate = new Date();
					$(beginSelector).datepicker().on("changeDate", function(ev) {
						if(ev.date.valueOf() > endDate.valueOf()) {
							$(tips).show().find("strong").text("The start date can not be greater then the end date");
							$(beginSelector).val("Choose Date")
						} else {
							$(tips).hide();
							startDate = new Date(ev.date)
						}
						$(beginSelector).datepicker("hide")
					});
					$(endSelector).datepicker().on("changeDate", function(ev) {
						if(ev.date.valueOf() < startDate.valueOf()) {
							$(tips).show().find("strong").text("The end date can not be less then the start date");
							$(endSelector).val("Choose Date")
						} else {
							$(tips).hide();
							endDate = new Date(ev.date)
						}
						$(endSelector).datepicker("hide")
					})
				})
			}
			DatePicker("#dp1", "#dp2", "#alert1");
			DatePicker("#dp3", "#dp4", "#alert2");
			DatePicker("#dp5", "#dp6", "#alert3");
			DatePicker("#dp7", "#dp8", "#alert4");