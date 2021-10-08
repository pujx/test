$(function() {
var btn_lenth=$(".fund-btn-box>div>div").length;
if(btn_lenth==2){
	$(".fund-btn-box>div>div").css("width","50%");
}else if(btn_lenth==3){
		$(".fund-btn-box>div>div").css("width","25%");
}else if(btn_lenth==4){
		$(".fund-btn-box>div>div").css("width","25%");
}else if(btn_lenth==5){
		$(".fund-btn-box>div>div").css("width","33.333%");
}else if(btn_lenth==6){
		$(".fund-btn-box>div>div").css("width","33.333%");
}
})
