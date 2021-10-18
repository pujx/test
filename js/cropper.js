$(function() {
	function PictureEdit() {
		this.imageWrap = $('#J_upload_box');
		this.uploadBtnWrap = $('#J_file_wrap');
		this.preImg = $('#J_file_box_img');
		this.uploadImgClickBox = $('.upload-img-click-box'); // 2个父级上传
		this.cropImg = null;
		this.uploadParentBtn = null; // 某一个父级上传
		this.uploadBtnDirection = null;
		this.cropBtn = $('#J_crop');
		this.pics = {
			left: {},
			right: {}
		};
		this.upload();
	}
	PictureEdit.prototype.upload = function() {
		var that = this;
		that.delPics();
		that.crop();
		that.getUploadBtn(); //获取点击按钮
		that.uploadOuterLayerParentBtnDelete(); // 点击外层关闭按钮
	};
	$('#J_file_wrap').on('click', function() {
		$("#J_file").attr("type", "file");
		if(typeof FileReader == "undefined") {
			$.DialogByZ.Autofade({Content: "Your browser does not support FileReader,Please upload it in another browser."});
		} else {
			$('#cropperModal').modal('show');
		}
	});

	$("#J_file").on("click", function() {
		var listl_len1 = $("#J_upload_box .item").length;
		if(listl_len1 >= 4) {
			$.DialogByZ.Autofade({Content: "最多上传4张图片~"});
			return false;
		}
	});
	//add
	PictureEdit.prototype.crop = function() {
		var that = this;
		that.cropBtn.click(function() {
			if($(".previewImg img").attr("src") == null) {
			$.DialogByZ.Autofade({Content: "图片不能为空!"});
				return false;
			} else {
				that.addPics();
				$("#pop-upload-bg").show();
				$(".previewImg").children("img").remove();
				$(".cropper-container").hide();
				$("#J_file").attr("type", "text");
				$("#J_file_box_img").attr("src", "");
				$("#pop-upload-bg").show();
			}
		});
	};
	// key
	PictureEdit.prototype.getFileKey = function() {
		var str = '0123456789abcdefghijklmnopqrstuvwxyz',
			n = str.length,
			key = "",
			i = 1;
		while(i < n) {
			var a = Math.floor(n * Math.random());
			key += str.charAt(a);
			i++;
		}
		return key
	};
	// append images
	PictureEdit.prototype.addPics = function() {
		var thumb = $('<div class="item"><i class="fa fa-close"></i></div>'),
			key = this.getFileKey(),
			data = '';
		this.cropImg = this.preImg.cropper('getCroppedCanvas', {
//			width: 200,
//			height: 200
		});
		data = this.cropImg.toDataURL();
		thumb.css('backgroundImage', 'url(' + data + ')').attr('key', key);
		var newThumb = thumb.clone(true);
		thumb.insertBefore(this.uploadBtnWrap);
		this.uploadParentBtn.append(newThumb);
		this.pics[this.uploadBtnDirection][key] = data.split(',').pop();
		this.uploadOuterLayerParentBtnIsShow();
	};
	// delete images
	PictureEdit.prototype.delPics = function(outerLayerDom) {
		var that = this;
		var newDom = outerLayerDom || that.imageWrap;
		newDom.on('click', 'i', function() {
			var parent = $(this).parent('.item'),
				key = parent.attr('key');
			parent.remove();
			if(!outerLayerDom) {
				that.uploadParentBtn.find('div[key =' + key + ']').remove();
			}
			delete that.pics[that.uploadBtnDirection][key];
			that.uploadOuterLayerParentBtnIsShow();
		});
	};
	// getBtn
	PictureEdit.prototype.getUploadBtn = function() {
		var that = this;
		$('.upload-click').on('click', function() {
			that.uploadParentBtn = $(this).parent();
			if(that.uploadParentBtn.attr('id') === 'J_upload_box1') {
				//显示上传地址证明弹框
				that.uploadBtnDirection = 'right';
				$(".upload-address-ul").show();
				$(".identity-select,.identity-dropdown").hide();
			} else {
				//显示上传身份证和护照的弹框
				that.uploadBtnDirection = 'left';
				$(".upload-address-ul").hide();
				$(".identity-select,.identity-dropdown").show();
			}
			var listl_img = that.uploadParentBtn.children('.item');
			listl_img.each(function(key, val) {
				var newVal = $(val).clone(true);
				newVal.insertAfter(that.uploadBtnWrap);
			});
		})
	}
	// OuterLayerBtn-show
	PictureEdit.prototype.uploadOuterLayerParentBtnIsShow = function() {
		var uploadOuterLayerBtn = this.uploadParentBtn.children('a');
//		setTimeout(function() {
//			var listl_len1 = $("#J_upload_box .item").length;
//			if(listl_len1 >= 4) {
//				uploadOuterLayerBtn.hide()
//			} else {
//				uploadOuterLayerBtn.show()
//			}
//		}, 10)
	}
	// OuterLayerBtn-delete
	PictureEdit.prototype.uploadOuterLayerParentBtnDelete = function() {
		this.delPics(this.uploadImgClickBox)
	}
	// base 64
	PictureEdit.prototype.getPicsData = function() {
		var arr = [];
		$.each(this.pics, function(i, n) {
			arr.push(n);
		});
		return arr.join(',');
	};
	new PictureEdit();
});

$("#cropperModal").on("hide.bs.modal", function() {
	$("#J_file").attr("type", "text");
	$(".previewImg").children("img").remove();
	$("#J_upload_box .item").remove();
});
$('#cropperModal').on('show.bs.modal', function(event) {
	$(".cropper-container").hide();
	$("#pop-upload-bg").show();
	$("#J_file").attr("type", "file");
})

function selectImg(file) {
	$("#pop-upload-bg").hide();
	$("#upload-select-loading").css("display", "block");
	if(!file.files || !file.files[0]) {
		return;
	}
	const reader = new FileReader()
	const that = this;
	reader.onloadend = function() {

		const result = this.result
		const img = new Image()
		img.src = result
		img.onload = function() {
			const data = compress(img, 1)
			var imgSrc = data
			imgArtwork = data
			var replaceSrc = imgSrc;
			$('#J_file_box_img').cropper('replace', replaceSrc, false);
			$("#upload-select-loading").css("display", "none");

		}
	}
	reader.readAsDataURL(file.files[0]);
	//限制上传图片的大小
	var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
	var fileSize = 0;
	if(isIE && !file.files) {
		fileSize = file.Size
	} else {
		fileSize = file.files[0].size
	}
	var size = fileSize / 1024;
	if(size > 10000) {
		$.DialogByZ.Autofade({Content: "文件大小不能超过 10M"});
		file.value = "";
		$("#pop-upload-bg").show();
		$("#upload-select-loading").css("display", "none");
		return
	}
	//判断图片格式
	var name = file.value;
	var fileName = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
	if(fileName != "jpg" && fileName != "jpeg" && fileName != "pdf" && fileName != "png" && fileName != "dwg" && fileName != "gif") {
		
			$.DialogByZ.Autofade({Content: "请选择正确的图片格式（jpg,png,gif,dwg,pdf,gif )！"});
		file.value = "";
		$("#pop-upload-bg").show();
		$("#upload-select-loading").css("display", "none");
		return
	}
}
$('#J_file_box_img').cropper({
	aspectRatio: NaN,
	preview: '.previewImg',
	guides: false,
	autoCropArea: 1,
	movable: false,
	dragCrop: true,
	movable: true,
	resizable: true,
	zoomable: false,
	mouseWheelZoom: false,
	touchDragZoom: true,
	rotatable: true,
	crop: function(e) {}
});

function compress(img, compressNum) {
	const canvas = document.createElement('canvas')
	const ctx = canvas.getContext('2d')
	const width = img.width
	const height = img.height
	canvas.width = width
	canvas.height = height
	ctx.fillStyle = '#fff'
	ctx.fillRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(img, 0, 0, width, height)
	const ndata = canvas.toDataURL('image/jpeg', compressNum)
	return ndata
}