window.onload = function() {
	var h1 = document.getElementsByTagName("h1")[0];
	checkNode(h1);
}

function checkNode(element) {
	//如果下个节点不存在，则返回null
	if (element == null) {
		return element;
	}
	//如果该节点为元素节点为P元素节点
	if (element.nodeName == "P") {
		element.style.color = "grey";
		element.style.fontSize = "1.2em";
	}
	//递归调用
	return checkNode(element.nextSibling);
}