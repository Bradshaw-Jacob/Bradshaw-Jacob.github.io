function getTime() {
	document.getElementById('timeDiv').innerHTML = Date();
}

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
	document.getElementById('Scroller').style.width = "800px";
}