window.onload = function() {
	change();
}

function change() {
	var linkList = document.getElementById("linklist");
	var a = linkList.getElementsByTagName("a");
	for (var i = 0; i < a.length; a++) {
		a[i].onmouseover = function() {}
		a[i].onmouseout = function() {}
	}
}