window.onload = function() {
	getNewContent();
}

function getHttpObject() {
	//如果XMLHttpRequest没被定义的话(IE中各个版本浏览器返回不同对象)
	if (typeof XMLHttpRequest == "undefined") {
		XMLHttpRequest = function() {
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.6.0");
			} catch (e) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");
			} catch (e) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {}
			return false;
		}
	}
	//定义的话则创建它的对象
	return new XMLHttpRequest();
}

function getNewContent() {
	//接收XMLHttpRequest对象
	var request = getHttpObject();
	if (request) {
		//如果对象存在的话用get的方式从url中提取流，异步操作执行
		request.open("GET", "example.txt", true);
		//服务器响应值，当XMLHttpRequest响应值改变时调用匿名函数
		//onreadystatechange是一个事件
		request.onreadystatechange = function() {
			//当响应值为4的时候
			if (request.readyState == 4) {
				//向DOM树中插入获取到的流
				var p = document.createElement("p");
				var text = document.createTextNode(request.responseText);
				p.appendChild(text);
				document.getElementById("new").appendChild(p);
			}
			//向服务器发送消息
			request.send(null);
		}
	} else {
		alert("Sorry,you browser doesn't support XMLHttpRequest")
	}
}