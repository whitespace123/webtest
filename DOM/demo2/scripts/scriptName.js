//防止变量在未加载完成html树结构时获取节点对象
window.onload = function() {
	var arr = document.getElementsByTagName("a");
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].getAttribute("class") === "popup") {
			var url = arr[i].getAttribute("href");
			//无法直接调用window.onclick=go(url);
			window.onclick = function() {
				//返回值为false阻止a标签进行页面跳转
				return go(url);
			}
		}
	}

	function go(url) {
		window.open(url, "baidu", "width=320,height=480");
		return false;
	}
}