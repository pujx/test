//绿色
$(".email").click(function() {
	$.confirm({
		theme: 'Modern',
//		icon: "fa fa-smile-o",
		title: "Success!",
		content: "操作成功！正在处理中...",
		type: 'orange',
		typeAnimated: true,
		buttons: {
			OK: {
				btnClass: 'btn-orange',
			},
		}
	});
});

//红色
$("button").click(function() {
	$.confirm({
		theme: 'Modern',
//		icon: "fa fa-frown-o",
		title: "Error!",
		content: "您的操作有误！请重新操作！",
		type: 'orange',
		typeAnimated: true,
		buttons: {
			OK: {
				btnClass: 'btn-orange',
			},
		}
	});
});
//黄色
$("button").click(function() {
	$.confirm({
		theme: 'Modern',
//		icon: "fa fa-meh-o",
		title: "Warning!",
		content: "为了账户安全，请定期修改密码~~",
		type: 'orange',
		typeAnimated: true,
		buttons: {
			OK: {
				btnClass: 'btn-orange',
			},
		}
	});
});