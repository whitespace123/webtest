window.onload = function() {
	displayAbbreviation();
	source();
}

function source() {
	//创建超链接元素节点对象
	var a = document.createElement("a");
	//创建文本节点对象
	var source = document.createTextNode("源自");
	//给超链接添加文本节点对象
	a.appendChild(source);
	//获取blockquote元素节点对象数组
	var blockquote = document.getElementsByTagName("blockquote");
	//创建变量用来接收元素节点对象
	var element = new Object();
	//遍历数组将匹配的元素节点地址给element，并获取cite属性节点
	for (var i = 0; i < blockquote.length; i++) {
		if (blockquote[i].getAttribute("cite") == null) {
			continue;
		}
		element = blockquote[i];
		var cite = element.getAttribute("cite");
	}
	//给a的href属性赋值
	a.setAttribute("href", cite);
	//插入到匹配的blockquote的子元素节点p的元素节点后面
	var p = element.getElementsByTagName("p")[0];
	p.appendChild(a);
}

function displayAbbreviation() {
	//获取文档中的所有abbr元素节点对象，放进数组中
	var abbr = document.getElementsByTagName("abbr");
	//创建文本节点数组和属性节点数组
	var text = new Array();
	var title = new Array();
	//给上面两个数组赋值
	for (var i = 0; i < abbr.length; i++) {
		text[i] = abbr[i].childNodes[0].nodeValue;
		title[i] = abbr[i].getAttribute("title");
	}
	//创建dl元素节点
	var dl = document.createElement("dl");
	//遍历属性节点数组，创建dt、dd元素节点，并给其赋值，在将其插入dl中
	for (var i = 0; i < title.length; i++) {
		var dt = document.createElement("dt");
		dt.appendChild(document.createTextNode(text[i]));
		var dd = document.createElement("dd");
		dd.appendChild(document.createTextNode(title[i]));
		dl.appendChild(dt);
		dl.appendChild(dd);
	}
	//获取body元素节点
	var body = document.getElementsByTagName("body")[0];
	//创建h2元素节点和h2Text文本节点，并把文本节点插入元素节点中
	var h2 = document.createElement("h2");
	var h2Text = document.createTextNode("Abbreviations");
	h2.appendChild(h2Text);
	//在body元素中插入h2和dl
	body.appendChild(h2);
	body.appendChild(dl);
}