function fileChange(target) {
	var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
	var fileSize = 0;
	if(isIE && !target.files) {
		fileSize = file.Size
	} else {
		fileSize = target.files[0].size
	}
	var size = fileSize / 1024;
	if(size > 12000) {
		$.confirm({
			title: "Error!",
			content: "文件大小不能超过 12MB",
			type: "red",
			typeAnimated: true,
			buttons: {
				tryAgain: {
					text: "Try again",
					btnClass: "btn-red",
				},
			}
		});
		target.value = "";
		return
	}
	var name = target.value;
	var fileName = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
	if(fileName != "jpg" && fileName != "pdf" && fileName != "png") {
		$.confirm({
			theme: 'Modern',
			icon: "modal-icon-warning",
			title: "",
			content: 'Please select the correct file format: .jpg, .png, .pdf',
			animation: 'zoom',
			closeAnimation: 'scale',
			buttons: {
				OK: {
					btnClass: 'buttons buttons-success',
				},
			}
		});
		target.value = "";
		return
	}
	$('.filenameBox').fadeIn();
}

$(function() {
	var fileLen;
	$("input[type=file]").change(function() {
	fileLen = $('.filenameBox p').length;
		if(fileLen > 4) {
			$.confirm({
				theme: 'Modern',
				icon: "modal-icon-warning",
				title: "",
				content: 'Upload up to 5 files.',
				animation: 'zoom',
				closeAnimation: 'scale',
				buttons: {
					OK: {
						btnClass: 'buttons buttons-success',
					},
				}
			});
			return false
		} else {
			$('.filenameBox').append("<p><i><img src='images/delete.svg'></i><span>" + $(this).val() + "</span></p>");
			$(this).attr('type', 'text');
			$(this).attr('type', 'file');
		}
	});
	//	$("input[type=file]").each(function() {
	//		if($(this).val() == "") {
	//			$(this).parents(".uploader").find(".filename").val("Please Select...")
	//		}
	//	})
	$(".filenameBox").on('click', 'i', function() {
		$(this).parent('p').remove();
	});

	$('#uploadFileBtn').click(function() {
		fileLen = $('.filenameBox p').length;
		if(fileLen == 0) {
			$.confirm({
				theme: 'Modern',
				icon: "modal-icon-warning",
				title: "",
				content: 'Please select the file to upload',
				animation: 'zoom',
				closeAnimation: 'scale',
				buttons: {
					OK: {
						btnClass: 'buttons buttons-success',
					},
				}
			});
			return false
		} else {
			$.confirm({
				theme: 'Modern',
				icon: "modal-icon-warning",
				title: "",
				content: 'You have successfully uploaded your file',
				animation: 'zoom',
				closeAnimation: 'scale',
				buttons: {
					OK: {
						btnClass: 'buttons buttons-success',
					},
				}
			});
			$('.filenameBox').text("");
		}
	});

});