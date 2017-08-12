//改进demo4，让滑动效果变得更快
window.onload = function() {
	prepareSlideshow();
}

function prepareSlideshow() {
	var list = document.getElementById("linklist");
	var links = list.getElementsByTagName("a");
	var left = -100;
	for (var i = 0; i < links.length; i++) {
		links[i].onmouseover = function() {
			var index = indexOf(links, this);
			left = (index + 1) * left;
			moveElement("preview3", left, 0, 10);
			left = -100;
		}
	}
}

function moveElement(elementID, final_x, final_y, interval) {
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	if (!elem.style.left) {
		elem.style.position = "absolute";
		elem.style.left = "0px";
	}
	if (!elem.style.top) {
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y) {
		return true;
	}
	if (xpos < final_x) {
		var dist = Math.ceil((final_x - xpos) / 10);
		xpos = xpos + dist;
	}
	if (xpos > final_x) {
		var dist = Math.ceil((xpos - final_x) / 10);
		xpos = xpos - dist;
	}
	if (ypos < final_y) {
		var dist = Math.ceil((final_y - ypos) / 10);
		ypos = ypos + dist;
	}
	if (ypos > final_y) {
		var dist = Math.ceil((ypos - final_y) / 10);
		ypos = ypos - dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement(\"" + elementID + "\"," + final_x + "," + final_y + "," + interval + ")";
	elem.movement = setTimeout(repeat, interval);
}

function indexOf(a, element) {
	for (var i = 0; i < a.length; i++) {
		if (element == a[i]) {
			return i;
		}
	}
	return -1;
}