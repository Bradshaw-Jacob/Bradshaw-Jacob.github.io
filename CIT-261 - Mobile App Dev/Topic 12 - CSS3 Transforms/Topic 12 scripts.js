function reset() {
	document.getElementById('testDiv').removeAttribute('style');
}

function translateDiv() {
	document.getElementById('testDiv').style.transform = 'translate(70px, -20px)';
}

function rotateDiv() {
	document.getElementById('testDiv').style.transform = 'rotate(30deg)';
}

function scaleDiv() {
	document.getElementById('testDiv').style.transform = 'scale(2,2)';
}

function skewDiv() {
	document.getElementById('testDiv').style.transform = 'skewX(15deg)';
}

//3D Tranforms

function reset2() {
	document.getElementById('testDiv2').removeAttribute('style');
}
function rotateX() {
	document.getElementById('testDiv2').style.transform = 'rotateX(180deg)';
}
function rotateY() {
	document.getElementById('testDiv2').style.transform = 'rotateY(180deg)';
}
function rotateZ() {
	document.getElementById('testDiv2').style.transform = 'rotateZ(90deg)';
}