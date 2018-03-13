function playPause() {
	var state = document.getElementById('menu').style.animationPlayState;
	if (state === "paused") {
		document.getElementById('menu').style.animationPlayState = "running"
		document.getElementById('button').innerHTML = "Pause";
	} else {
		document.getElementById('menu').style.animationPlayState = "paused";
		document.getElementById('button').innerHTML = "Play";
	};
}

function smallChange() {
	var fontSize = document.getElementById('text').style.fontSize = "10px";
}
function mediumChange() {
	var fontSize = document.getElementById('text').style.fontSize = "22px";
}
function largeChange() {
	var fontSize = document.getElementById('text').style.fontSize = "36px";
}