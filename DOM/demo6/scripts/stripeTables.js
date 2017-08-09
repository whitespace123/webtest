window.onload = function() {
	stripeTables();
	getAbbr();
}

function stripeTables() {
	//获取文档中表格对象数组
	var table = document.getElementsByTagName("table");
	//创建一个变量用来储存tr的对象数组
	var tr = new Array();
	//遍历表格对象数组
	for (var i = 0; i < table.length; i++) {
		//将每个表格对象中的tr子元素放进数组中
		tr = table[i].getElementsByTagName("tr");
		//遍历tr数组
		for (var j = 0; j < tr.length; j++) {
			//如果tr为当前表格中的奇数行时，将背景色设置为黄色
			if (j % 2 != 0) {
				tr[j].style.backgroundColor = "#ffc";
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