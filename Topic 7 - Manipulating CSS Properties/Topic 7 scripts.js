function oneStyle() {
	document.getElementById('singleStyle').style.border = "15px dotted";
}

function revertOneStyle() {
	document.getElementById('singleStyle').removeAttribute('style');
}




function updateClass() {
	var allDiv = document.getElementsByClassName('testingBlock');

	for (var i = (allDiv.length - 1); i >= 0; i--) {
		allDiv[i].className = "rainbow";
	}
}

function revertClass() {
	var allDiv = document.getElementsByClassName('rainbow');

	for (var i = (allDiv.length - 1); i >= 0; i--) {
		allDiv[i].className = "testingBlock";
	}
}




function changeStyleSheet() {

}