function getTime() {
	document.getElementById('timeDiv').innerHTML = Date();
}

//onTouch functions//
window.addEventListener('load', function() {
	var touch = document.getElementById('touchy');

	var colors = ["blue", "green", "red", "yellow", "orange", "pink", "purple", "aqua", "black", "teal", "burgundy", "#41f444", "#b2f441", "#f141f4", "#f4418e", "#f4d041"];

	touch.addEventListener('touchstart', function(e) {
		document.getElementById('textOut').innerHTML = "You Touched me";
		touch.style.backgroundColor = colors[Math.floor((Math.random()*16)+1)];

		e.preventDefault();
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