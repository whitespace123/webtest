window.onload = function() {
	var btn = document.getElementById("btn");
	var message = document.getElementById("message");
	//创建变量控制移动
	var move = 50;
	btn.onclick = function() {
		//每次点击按钮都会自增100
		move += 100;
		//字符串拼接
		var px = move + "px";
		message.style.left = px;
	}
}