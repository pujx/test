function YYYYMMDDstart() {
	MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var y = new Date().getFullYear();
	for(var i = (y - 80); i < (y + 1); i++) {
		document.reg_testdate.YYYY.options.add(new Option(" " + i, i))
	}
	$(".form-control-chosen").trigger("chosen:updated");
	var arr = new Array();
	arr = [" ", "JAN.", "FEB.", "MAR.", "APR.", "MAY.", "JUN.", "JUL.", "AUG.", "SEP.", "OCT.", "NOV.", "DEC."];
	for(var i = 1; i < arr.length; i++) {
		document.reg_testdate.MM.options.add(new Option(" " + arr[i], i));
	}
	$(".form-control-chosen").trigger("chosen:updated");
	document.reg_testdate.YYYY.value = y;
	document.reg_testdate.MM.value = new Date().getMonth() + 1;
	var n = MonHead[new Date().getMonth()];
	if(new Date().getMonth() == 1 && IsPinYear(YYYYvalue)) {
		n++
	}
	document.reg_testdate.DD.value = new Date().getDate()
}
if(document.attachEvent) {
	window.attachEvent("onload", YYYYMMDDstart)
} else {
	window.addEventListener("load", YYYYMMDDstart, false)
}

function YYYYDD(str) {
	var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;
	if(MMvalue == "") {
		var e = document.reg_testdate.DD;
		optionsClear(e);
		return
	}
	var n = MonHead[MMvalue - 1];
	if(MMvalue == 2 && IsPinYear(str)) {
		n++
	}
}

function MMDD(str) {
	var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;
	if(YYYYvalue == "") {
		var e = document.reg_testdate.DD;
		optionsClear(e);
		return
	}
	var n = MonHead[str - 1];
	if(str == 2 && IsPinYear(YYYYvalue)) {
		n++
	}
	writeDay(n)
}

function writeDay(n) {
	var e = document.reg_testdate.DD;
	optionsClear(e);
	for(var i = 1; i < (n + 1); i++) {
		e.options.add(new Option(" " + i, i))
	}
	$(".form-control-chosen").trigger("chosen:updated")
}

function IsPinYear(year) {
	return(0 == year % 4 && (year % 100 != 0 || year % 400 == 0))
}

function optionsClear(e) {
	e.options.length = 1
};