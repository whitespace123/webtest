window.onload = function() {
	//var time = setTimeout("move()", 1000);
	//取消上述的延迟操作
	//clearTimeout(time);
	go();
}

function go() {
	//当方法中有事件时js不能传元素节点对象,下面会报错,同时更改move的message。当循环中有事件时，也是循环完调用事件，当事件触发时候获取不到for循环中的局部变量
	var message = document.getElementById("message");
	//	move(message, 300, 300, 10);
	move("message", 300, 300, 10);
}

function move(message, left, top, time) {
	var mMessage = document.getElementById(message);
	var mLeft = parseInt(mMessage.style.left);
	var mTop = parseInt(mMessage.style.top);
	if (mLeft == left && mTop == top) {
		return true;
	}
	if (mLeft < left) {
		mLeft++;
	}
	if (mLeft > left) {
		mLeft--;
	}
	if (mTop < top) {
		mTop++;
	}
	if (mTop > top) {
		mTop--;
	}
	mMessage.style.left = mLeft + "px";
	mMessage.style.top = mTop + "px";
	//使用字符串拼接，让变量的值可以变化,由于message变量储存字符串所以要让拼接后的message的值加上引号move("message",10,20)
	//因为变成字符串的时候，变量都会变成实际的值，字符串拼接的时候原字符串的双引号不会在字符串内显示
	var x = "move(\"" + message + "\"," + left + "," + top + "," + time + ")";
	setTimeout(x, time);
}