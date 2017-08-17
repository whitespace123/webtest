//文档加载
function addLoadEvent(fun) {
	//把现有的onload事件函数的值存入oldOnload中
	var oldOnload = window.onload;
	//如果onload事件还没有绑定任何函数，直接添加函数
	//这里必须要有分之，因为多个window.onload永远绑定最后一个函数
	if (typeof window.onload != 'function') {
		window.onload = fun;
	} else {
		window.onload = function() {
			//否则原先的函数加载，再加载新的函数
			oldOnload();
			fun();
		}
	}
}

//在目标元素后插入元素
function insertAfter(newELement, targetElement) {
	//获取目标元素的父元素节点
	var parent = targetElement.parentNode;
	//如果父元素的最后子元素为目标元素
	if (parent.lastChild == targetElement) {
		//直接添加子元素节点到父元素节点(默认最后)
		parent.appendChild(newELement);
	} else {
		//否则添加到目标元素节点和目标元素节点的下一个元素节点之间
		parent.insertBefore(newELement, targetElement.nextSibling);
	}
}

//给目标元素节点添加类选择器
function addClass(element, value) {
	//如果目标元素节点类选择器不存在，就直接设置一个类选择器
	if (!element.className) {
		element.className = value;
	} else {
		//否则就再之后给其一个类选择器，多个类选择器需要空格隔离
		var newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

//给当前页面位置设置类选择器标记
function highLightPage() {
	var header = document.getElementsByTagName("header")[0];
	var nav = header.getElementsByTagName("nav")[0];
	//获取a节点数组
	var a = nav.getElementsByTagName("a");
	//遍历数组，并比对其href和连接的href
	for (var i = 0; i < a.length; i++) {
		var href = a[i].getAttribute("href");
		//window.location.href是当前所在的链接
		if (window.location.href.indexOf(href) != -1) {
			a[i].className = "here";
			var text = a[i].childNodes[0].nodeValue.toLowerCase();
			//给所在的页面body设置独一无二的id选择器
			document.getElementsByTagName("body")[0].id = text;
		}
	}
}
addLoadEvent(highLightPage);

//做一个位移动画
function moveElement(elementID, left, top, time) {
	//获取元素对象，这里传递字符串而不是对象的原因是在setTimeout中参数会将对象转换成地址字符串
	var elem = document.getElementById(elementID);
	//如果元素对象未设置初始值的话，设置初始值
	if (!elem.style.left) {
		elem.style.left = "0px";
	}
	if (!elem.style.top) {
		elem.style.top = "0px";
	}
	//获取该对象的left和top的值
	var eLeft = parseInt(elem.style.left);
	var eTop = parseInt(elem.style.top);
	//获取加点对象含有timeOff的属性，并清除上个递归的时间函数
	if (elem.getAttribute("timeOff")) {
		clearTimeout(elem.getAttribute("timeOff"));
	}
	//定义一个加速阀
	var fast = 0;
	//满足条件时不再递增/减
	if (eLeft == left && eTop == top) {
		return true;
	}
	if (eLeft > left) {
		fast = Math.ceil((eLeft - left) / 10);
		eLeft = eLeft - fast;
	}
	if (eLeft < left) {
		fast = Math.ceil((left - eLeft) / 10);
		eLeft = eLeft + fast;
	}
	if (eTop > top) {
		fast = Math.ceil((eTop - top) / 10);
		eTop = etop - fast;
	}
	if (eTop < top) {
		fast = Math.ceil((top - eTop) / 10);
		eTop = etop + fast;
	}
	//给该元素的left和top赋值
	elem.style.left = eLeft + "px";
	elem.style.top = eTop + "px";
	//定义一个字符串以便于时间函数递归，并且给时间函数抽象成变量
	var fun = "moveElement(\"" + elementID + "\"," + left + "," + top + "," + time + ")";
	var timeOff = setTimeout(fun, time);
	//将其变量塞到节点对象的属性上面，因为节点对象的作用域是整个页面
	elem.setAttribute("timeOff", timeOff);
}

//设置动画驱动
function prepareSlideshow() {
	//如果不存在intro则返回，跳转页面时不设置对js有影响
	if (!document.getElementById("intro")) {
		return false;
	}
	//获得p元素节点对象，在下面增加div并添加img子节点
	var intro = document.getElementById("intro");
	var div = document.createElement("div");
	div.setAttribute("id", "slideshow");
	//利用绝对定位的重叠让图片的透明圆角
	var frame = document.createElement("img");
	frame.id = "frame";
	frame.src = "images/frame.gif";
	div.appendChild(frame);
	var img = document.createElement("img");
	img.id = "preview";
	img.src = "images/slideshow.gif";
	img.alt = "a glimpse of what awaits you";
	div.appendChild(img);
	insertAfter(div, intro);
	//设置字符串变量用来获取连接的地址
	var whereToGo = "";
	var a = document.getElementsByTagName("a");
	//遍历连接对象并给予事件
	for (var i = 0; i < a.length; i++) {
		a[i].onmouseover = function() {
			whereToGo = this.getAttribute("href");
			if (whereToGo == "about.html") {
				moveElement("preview", -150, 0, 5);
			}
			if (whereToGo == "photos.html") {
				moveElement("preview", -300, 0, 5);
			}
			if (whereToGo == "live.html") {
				moveElement("preview", -450, 0, 5);
			}
			if (whereToGo == "contact.html") {
				moveElement("preview", -600, 0, 5);
			}
		}
		a[i].onmouseout = function() {
			moveElement("preview", 0, 0, 5);
		}
	}
}
addLoadEvent(prepareSlideshow);

//折叠连接所在的文本，使页面更简洁
function showSection() {
	//获取文本的父id
	var jay = document.getElementById("jay");
	var domsters = document.getElementById("domsters");
	//如果当前页面有该id，则初始化隐藏文本
	if (jay && domsters) {
		jay.style.display = "none";
		domsters.style.display = "none";
	}
	var nav = document.getElementsByTagName("nav")[1];
	if (!nav) {
		return false;
	}
	var a = nav.getElementsByTagName("a");
	//点击事件触发让点击到的链接所在的文本显示在页面上
	for (var i = 0; i < a.length; i++) {
		a[i].onclick = function() {
			var href = this.getAttribute("href");
			if (href == ("#" + jay.id)) {
				jay.style.display = "block";
			} else {
				jay.style.display = "none";
			}

			if (href == ("#" + domsters.id)) {
				domsters.style.display = "block";
			} else {
				domsters.style.display = "none";
			}
		}
	}
}
addLoadEvent(showSection);

//显示图片在页面中
function showPic() {
	//获取链接所在的父节点
	var imagegallery = document.getElementById("imagegallery");
	//如果该页面没有这个父节点，返回false
	if (!imagegallery) {
		return false;
	}
	//创建模板
	var p = document.createElement("p");
	var img = document.createElement("img");
	//这里hbuilder自动添加路径出了问题
	img.src = "images/placeholder.gif"
	p.appendChild(document.createTextNode("Choose an image"));
	insertAfter(p, imagegallery);
	insertAfter(img, p)
	var a = imagegallery.getElementsByTagName("a");
	//点击链接后，将该链接的href属性赋予模板上，并返回false阻止链接跳转
	for (var i = 0; i < a.length; i++) {
		a[i].onclick = function() {
			img.src = this.getAttribute("href")
			return false;
		}
	}
}
addLoadEvent(showPic);

//给表格设置背景色
function stripeTables() {
	//获取tbody元素节点对象
	var tbody = document.getElementsByTagName("tbody")[0];
	//如果tbody不存在则返回false
	if (!tbody) {
		return false;
	}
	//获取tbody下的子元素tr节点数组
	var tr = tbody.getElementsByTagName("tr");
	for (var i = 0; i < tr.length; i++) {
		//遍历数组，如果为偶数时，添加odd类选择器
		if (i % 2 == 0) {
			addClass(tr[i], "odd");
		}
		//并给所有的tr添加highlight类选择器
		addClass(tr[i], "highlight");
	}
}
addLoadEvent(stripeTables)

//显示dl列表
function displayAbbreviations() {
	//获取文档中的第一个table元素节点对象
	var table = document.getElementsByTagName("table")[0];
	//如果不存在则返回false
	if (!table) {
		return false;
	}
	//创建h3元素节点对象
	var h3 = document.createElement("h3");
	//创建文本节点对象，并加入到h3的子元素中
	h3.appendChild(document.createTextNode("Abbreviations"));
	//获取abbr元素节点对象数组
	var abbr = table.getElementsByTagName("abbr");
	//创建dl对象
	var dl = document.createElement("dl");
	for (var i = 0; i < abbr.length; i++) {
		//遍历数组，将创建dt个dd对象，并添加文本子节点
		var dt = document.createElement("dt");
		var text1 = document.createTextNode(abbr[i].childNodes[0].nodeValue);
		dt.appendChild(text1);
		var dd = document.createElement("dd");
		var text2 = document.createTextNode(abbr[i].getAttribute("title"));
		dd.appendChild(text2);
		dl.appendChild(dt);
		dl.appendChild(dd);
	}
	//插入h3元素节点对象
	insertAfter(h3, table);
	//插入dl元素节点对象
	insertAfter(dl, h3);
}
addLoadEvent(displayAbbreviations)

