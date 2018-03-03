function getTime() {
	document.getElementById('timeDiv').innerHTML = Date();
}

//onTouch functions//

var touch = document.getElementById('touchy');

touch.addEventListener('touchstart', function(e) {
	console.log("You Touched me");
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