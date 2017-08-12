window.onload = function() {
	change();
}

function change() {
	var linkList = document.getElementById("linklist");
	var a = linkList.getElementsByTagName("a");
	var preview = document.getElementById("preview");
	var index = 0;
	for (var i = 0; i < a.length; i++) {
		a[i].onmouseover = function() {
			index = indexOf(a, this);
			preview.id = "preview" + index;
		}
		a[i].onmouseout = function() {
			preview.id = "preview";
		}
	}
}

function indexOf(a, element) {
	for (var i = 0; i < a.length; i++) {
		if (element == a[i]) {
			return i;
		}
	}
	//因为js整除有小数，不和java一致，故二分查询需要改动
	return -1;
}