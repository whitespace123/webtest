window.onload = function() {
	stripeTables();
	getAbbr();
	wouldBeBold();
}

function stripeTables() {
	//获取文档中表格对象数组
	var table = document.getElementsByTagName("table");
	//创建一个变量用来储存tr的对象数组
	var tr = new Array();
	//遍历表格对象数组
	for (var i = 0; i < table.length; i++) {
		//通过DOM修改样式
		/*//将每个表格对象中的tr子元素放进数组中
		tr = table[i].getElementsByTagName("tr");
		//遍历tr数组
		for (var j = 0; j < tr.length; j++) {
			//如果tr为当前表格中的奇数行时，将背景色设置为黄色
			if (j % 2 != 0) {
				tr[j].style.backgroundColor = "#ffc";
			}
		}*/
		//通过引入class改变样式
		tr = table[i].getElementsByTagName("tr");
		for (var j = 0; j < tr.length; j++) {
			if (j % 2 != 0) {
				tr[j].className += " odd";
			}
		}
	}
}

function getAbbr() {
	var abbr = document.getElementsByTagName("abbr");
	var h2 = document.createElement("h2");
	h2.appendChild(document.createTextNode("Abbreviations"));
	var body = document.getElementsByTagName("body")[0];

	var dl = document.createElement("dl");
	for (var i = 0; i < abbr.length; i++) {
		var dd = document.createElement("dd");
		dd.appendChild(document.createTextNode(abbr[i].getAttribute("title")));
		var dt = document.createElement("dt");
		dt.appendChild(document.createTextNode(abbr[i].childNodes[0].nodeValue));
		dl.appendChild(dt);
		dl.appendChild(dd);
	}
	body.appendChild(h2);
	body.appendChild(dl);
}

function wouldBeBold() {
	var table = document.getElementsByTagName("table");
	var tr;
	for (var i = 0; i < table.length; i++) {
		tr = table[i].getElementsByTagName("tr");
		for (var j = 0; j < tr.length; j++) {
			//通过DOM改变样式不是一个好做法
			/*//鼠标在元素上时会将字体变粗
			tr[j].onmouseover = function() {
				this.style.fontWeight = "bold";
			}
			//鼠标离开元素时，将字体设置为默认
			tr[j].onmouseout = function() {
				this.style.fontWeight = "normal";
			}*/
			//引用css class改变样式
			tr[j].className += " over";
		}
	}
}