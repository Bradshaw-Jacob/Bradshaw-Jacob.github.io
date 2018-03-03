function getTime() {
	document.getElementById('timeDiv').innerHTML = Date();
}

//onTouch functions//
window.addEventListener('load', function() {
	var touch = document.getElementById('touchy');

	touch.addEventListener('touchstart', function(e) {
		document.getElementById('textOut').innerHTML = "You Touched me";
	}, false)

}, false)


 function changeBlue() {
 	var elem = document.getElementById('touchy');
	elem.style.transition = "background 1.0s linear 0s";
	elem.style.background = "#9bc8ff";
}





//Scroller functions//
var x = 0;
function myScrollCount() {
	scrollCount = x += 1;
	if (scrollCount >= 6) {
		document.getElementById("demo").innerHTML = x += 1;
		scrollerExpand();
	}
}

function scrollerExpand() {
	document.getElementById('Scroller').style.height = "auto";
	document.getElementById('Scroller').style.width = "600px";
}