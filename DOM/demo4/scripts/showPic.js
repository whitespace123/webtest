window.onload = function() {
	setElements();
	checkPic();
}

function checkPic() {
	var imagegallery = document.getElementById("imagegallery");
	var arr = imagegallery.getElementsByTagName("a");
	for (var i = 0; i < arr.length; i++) {
		arr[i].onclick = function() {
			showPic(this);
			return false;
		}
	}
}

function setElements() {
	var img = document.createElement("img");
	img.setAttribute("id", "placeholder");
	img.setAttribute("src", "images/placeholder.gif");
	img.setAttribute("alt", "my image gallery");
	var p = document.createElement("p");
	p.setAttribute("id", "description");
	var text = document.createTextNode("Choose an image.");
	p.appendChild(text);
	var body = document.getElementsByTagName("body")[0];
	var imagegallery = document.getElementById("imagegallery");
	body.insertBefore(p, imagegallery);
	body.insertBefore(img, p);
}

function showPic(elements) {
	var href = elements.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", href);
	var description = document.getElementById("description");
	var title = elements.getAttribute("title");
	description.childNodes[0].nodeValue = title;
}