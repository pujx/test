$("#cropperModal").on("hide.bs.modal", function() {
	$(".cropper-container").remove();
	$(".previewImg").children("img").remove()
});

function test(imgId) {
	$("#imgId").val(imgId);
	$("#chooseImg").attr("type", "file")
}
	
$(".cropper").on('click', function() {
		if(typeof FileReader == "undefined") {
			$.confirm({
				title: "Error!",
				content: "您的浏览器不支持 FileReader ,请换个浏览器进行上传",
				type: "red",
				typeAnimated: true,
				buttons: {
					tryAgain: {
						text: "关闭",
						btnClass: "btn-red",
					},
				}
			});
		} else {
			$('#cropperModal').modal('show');
		}
	});
function selectImg(file) {
	if(!file.files || !file.files[0]) {
		return
	}
	const reader = new FileReader();
	const that = this;
	reader.onloadend = function() {
		const result = this.result;
		const img = new Image();
		img.src = result;
		img.onload = function() {
			const data = compress(img, 0.5);
			var imgSrc = data;
			imgArtwork = data;
			var replaceSrc = imgSrc;
			$("#tailoringImg").cropper("replace", replaceSrc, false)
		}
	};
	reader.readAsDataURL(file.files[0]);
	$("#chooseImg").attr("type", "text")
}
$("#tailoringImg").cropper({
	aspectRatio: NaN,
	preview: ".previewImg",
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
$(".cropper-rotate-btn").on("click", function() {
	$("#tailoringImg").cropper("rotate", 45)
});
$(".cropper-rotate-btnL").on("click", function() {
	$("#tailoringImg").cropper("rotate", -45)
});
var flagX = true;
$(".cropper-scaleX-btn").on("click", function() {
	if(flagX) {
		$("#tailoringImg").cropper("scaleX", -1);
		flagX = false
	} else {
		$("#tailoringImg").cropper("scaleX", 1);
		flagX = true
	}
	flagX != flagX
});
$("#sureCut").on("click", function() {
	if($(".previewImg img").attr("src") == null) {
		$.confirm({
			title: "Error!",
			content: "Choose Picture",
			type: "danger",
			typeAnimated: true,
			buttons: {
				tryAgain: {
					text: "OK",
					btnClass: "btn-danger",
				}
			}
		});
		return false
	} else {
		var cas = $("#tailoringImg").cropper("getCroppedCanvas");
		var base64url = cas.toDataURL("image/png");
		$("#" + $("#imgId").val()).prop("src", base64url);
		var choose_pic = "#" + $("#imgId").val();
		$(choose_pic).siblings("p").hide()
	}
});

function compress(img, compressNum) {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	const width = img.width;
	const height = img.height;
	canvas.width = width;
	canvas.height = height;
	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, 0, 0, width, height);
	const ndata = canvas.toDataURL("image/jpeg", compressNum);
	return ndata
};