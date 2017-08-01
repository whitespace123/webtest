function showPic(elements) {
	/*获取参数中的元素节点对象的属性*/
	var href = elements.getAttribute("href");
	var title = elements.getAttribute("title");
	/*获取需要显示的区域的元素节点对象*/
	var placeholder = document.getElementById("placeholder");
	var description = document.getElementById("description");
	/*将显示区域的属性设置为参数对象的属性*/
	placeholder.setAttribute("src", href);
	description.childNodes[0].nodeValue = title;
}

function countBodyChildren() {
	var body = document.getElementsByTagName("body")[0];
	var children = body.childNodes;
	for (var i = 0; i < children.length; i++) {
		alert(children[i].nodeType);
	}
}