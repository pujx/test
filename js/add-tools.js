$(function() {
	$(".add-tools-box a").click(function(e) {
		e.preventDefault();
	});
	$("#page-tools-box li a").clone().appendTo("#rList");
	$("#rList a").click(function(e) {
		e.preventDefault();
	});

	$('#save-action').on('click', function() {
		var listl_len1 = $(".right-box li a").length;
		if(listl_len1 <= 2) {
			$.confirm({
				theme: 'Modern',
				icon: "modal-icon-warning",
				title: "",
				content: "Please keep at least 3 items.",
				typeAnimated: false,
				buttons: {
//															Cancel: {
//																btnClass: 'buttons buttons-trans',
//															},
					OK: {
						btnClass: 'buttons buttons-success',
					},
				}
			});
			return false;
		} else {
			$("#page-tools-box li a,#page-tools-box li span").remove();
			$("#rList a").clone().appendTo("#page-tools-box li");
			//					$("<span class='col-xs-2' id='open-tools-modal'><div class='tools-item'><p><img src='../Common/images/add-tools.svg' alt='' /></p></div></span>").appendTo("#page-tools-box li");

			$("#page-tools-box li a").on("click", function() {
				var h = $(this).attr("href");
				window.open(h, "_self");
			});
		}
		$.confirm({
				theme: 'Modern',
				icon: "modal-icon-warning",
				title: "",
				content: "Success!",
  				animation: 'zoom',
    			closeAnimation: 'scale',
				buttons: {
//					Cancel: {
//						btnClass: 'buttons buttons-trans',
//					},
					OK: {
						btnClass: 'buttons buttons-success',
					},
				}
			});
			
	
	
	});

	$(".data-listl").on("click", "li a", function() {
		var listl_len = $(".right-box li a").length;
		if(listl_len >= 7) {
			$.confirm({
				theme: 'Modern',
				icon: "modal-icon-warning",
				title: "",
				content: "Add up to 7 items.",
  animation: 'zoom',
    closeAnimation: 'scale',
				buttons: {
//					Cancel: {
//						btnClass: 'buttons buttons-trans',
//					},
					OK: {
						btnClass: 'buttons buttons-success',
					},
				}
			});
			return false;
		} else {

			$(this).appendTo($("#rList"));
			$("#rList a").click(function(e) {
				e.preventDefault();
			});
			$("#rList").parents(".no-tools-item").show();

			var lList = $("#lList a").length;
			var lList1 = $("#lList1 a").length;
			var lList2 = $("#lList2 a").length;
			var lList3 = $("#lList3 a").length;

			if(lList == 0) {
				$("#lList").parents(".no-tools-item").hide();
			}
			if(lList1 == 0) {
				$("#lList1").parents(".no-tools-item").hide();
			}
			if(lList2 == 0) {
				$("#lList2").parents(".no-tools-item").hide();
			}
			if(lList3 == 0) {
				$("#lList3").parents(".no-tools-item").hide();
			}

		}
	});
	$(".right-box").on("click", " li a", function(e) {
		e.preventDefault;
		var listl_len = $(".right-box li a").length;
		if(listl_len == 1) {
			$("#rList").parents(".no-tools-item").hide();
			$("#no-select").show();
		};
		var data_box = $(this).attr("data-box");
		if(data_box == "lList") {
			$("#lList").append(this).parents(".no-tools-item").show();
		} else if(data_box == "lList1") {
			$("#lList1").append(this).parents(".no-tools-item").show();
		} else if(data_box == "lList2") {
			$("#lList2").append(this).parents(".no-tools-item").show();
		} else if(data_box == "lList3") {
			$("#lList3").append(this).parents(".no-tools-item").show();
		}
	});
	//		var modalText=$("#append-modal .modal-body").html();
	//	$(".cancel-tools-btn").click(function(){
	//		$("#append-modal .modal-body").html("");
	//		$("#append-modal .modal-body").append(modalText)
	//		$("#append-modal").modal("hide");
	//	});

});