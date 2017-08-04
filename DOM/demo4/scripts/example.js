window.onload = function() {
	var button = document.getElementsByTagName("button");
	button[0].onclick = function() {
		//这个有弊端，会替换页面元素只显示HelloWorld文本，不显示其他页面元素
		document.write("HelloWorld");
	}
	button[1].onclick = function() {
		var title = this.getAttribute("title");
		var testdiv = document.getElementById("testdiv");
		//获取并改变子元素节点及其中的内容
		testdiv.innerHTML = title;
	}
	button[2].onclick = function() {
		var title = this.getAttribute("title");
		var testdiv = document.getElementById("testdiv");
		var p = testdiv.getElementsByTagName("p")[0];
		var em = p.getElementsByTagName("em")[0];
		p.childNodes[0].nodeValue = "I inserted";
		em.childNodes[0].nodeValue = " this";
		p.childNodes[2].nodeValue = " comtent too.";
	}
	button[3].onclick = function() {
		//首先创建元素节点p
		var p = document.createElement("p");
		//创建文本节点
		var text1 = document.createTextNode("HelloWorld，gald to see ");
		var text2 = document.createTextNode("you");
		var text3 = document.createTextNode("!");
		//找到需要插入的文本节点
		var testdiv = document.getElementById("testdiv");
		//因为文本节点中text2是em的子节点，而其他文本加点则是em元素节点的兄弟节点
		var em = document.createElement("em");
		//给p节点添加子节点
		p.appendChild(text1);
		p.appendChild(em);
		//给em节点添加子节点
		em.appendChild(text2)
		p.appendChild(text3);
		//给插入点添加子节点
		testdiv.appendChild(p);
	}
}