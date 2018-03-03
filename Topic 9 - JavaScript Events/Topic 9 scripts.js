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