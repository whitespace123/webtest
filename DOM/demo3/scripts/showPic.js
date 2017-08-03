window.onload = function() {
	var imagegallery = document.getElementById("imagegallery");
	var arr = imagegallery.getElementsByTagName("a");
	for (var i = 0; i < arr.length; i++) {
		arr[i].onclick = function() {
			showPic(this);
			return false;
		}

	}

	function showPic(elements) {
		var href = elements.getAttribute("href");
		var placeholder = document.getElementById("placeholder");
		placeholder.setAttribute("src", href);
		var description = document.getElementById("description");
		var title = elements.getAttribute("title");
		description.childNodes[0].nodeValue = title;
	}
}