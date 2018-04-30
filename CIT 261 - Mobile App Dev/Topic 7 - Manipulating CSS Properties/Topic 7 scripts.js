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


function changeStyleSheet(sheet) {
	document.getElementById('styles').setAttribute('href', sheet);
}

/*function changeStyleSheet(theme) {
	switch (theme) {
		case 'default' :
			document.getElementById('default').removeAttribute('disabled');
			document.getElementById('second').setAttribute('disabled', true);
		case 'second' :
			document.getElementById('default').setAttribute('disabled', true);
			document.getElementById('second').removeAttribute('disabled');
	}
}*/