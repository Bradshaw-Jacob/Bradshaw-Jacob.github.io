function toggleMenu() {
	document.getElementById("menu").classList.toggle("hide");
}

var element = document.getElementById('menu');

function windowSize() {
	if (window.screen.width >= 600) {
		element.classList.remove("hide");
	}
}

window.onload = windowSize();