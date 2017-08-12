window.onload = function() {
	var example = document.getElementById("example");
	var button = document.getElementsByTagName("button");
	var arr = [
		example.style,
		example.nodeName,
		example.style.color,
		example.style.fontFamily,
		"black",
		"微软雅黑"
	];
	var x = new Object();
	for (var i = 0; i < button.length; i++) {
		if (i < button.length - 2) {
			button[i].onclick = function() {
				x = this;
				alert(arr[indexOf(button, x)]);
			}
		} else if (i == button.length - 2) {
			button[i].onclick = function() {
				x = this;
				example.style.color = arr[indexOf(button, x)];
			}
		} else {
			button[i].onclick = function() {
				x = this;
				example.style.fontFamily = arr[indexOf(button, x)];
			}
		}
	}
}

function indexOf(button, value) {
	for (var i = 0; i < button.length; i++) {
		if (value == button[i]) {
			return i;
		}
	}
}