$(document).ready(function() {
	// third example
	$("#red").treeview({
		animated: "fast",
		collapsed: true,
		unique: true,
		persist: "cookie",
	});
});
$(document).click(function(e) {
	var _con = $(".floatingWindow--show");
	if(!_con.is(e.target) && _con.has(e.target).length === 0) {
		$(".floatingWindow--show").toggleClass("floatingWindow--show");
	}
});
$(".ibTtee").click(function() {
	$('.floatingWindow').toggleClass("floatingWindow--show");
});