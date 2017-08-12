window.onload = function() {
	show();
}

function show() {
	var preview3 = document.getElementById("preview3");
	preview3.style.position = "absolute";
	preview3.style.left = "0px";
	preview3.style.top = "0px";
	var linkList = document.getElementById("linklist");
	var a = linkList.getElementsByTagName("a");
	//设置自动控制显示图片变量
	var left = -100;
	for (var i = 0; i < a.length; i++) {
		a[i].onmouseover = function() {
			var index = indexOf(a, this);
			left = (index + 1) * left;
			slide("preview3", left, 0, 10);
			//将变量的值初始化
			left = -100;
		}
	}
}

function slide(elementID, left, top, time) {
	var element = document.getElementById(elementID);
	var eleLeft = parseInt(element.style.left);
	var eleTop = parseInt(element.style.top);
	if (element.getAttribute("control") != null) {
		clearTimeout(element.getAttribute("control"));
	}
	if (eleLeft == left && eleTop == top) {
		return true;
	}
	if (eleLeft > left) {
		eleLeft--;
	}
	if (eleLeft < left) {
		eleLeft++;
	}
	if (eleTop > top) {
		eleTop--;
	}
	if (eleTop < top) {
		eleTop++;
	}
	element.style.left = eleLeft + "px";
	element.style.top = eleTop + "px";
	var str = "slide(\"" + elementID + "\"," + left + "," + top + "," + time + ")";
	//让clearTime起作用
	var control = setTimeout(str, time);
	//将其设置到属性上，可以脱离作用域
	element.setAttribute("control", control);
}

function indexOf(a, element) {
	for (var i = 0; i < a.length; i++) {
		if (element == a[i]) {
			return i;
		}
	}
	return -1;
}