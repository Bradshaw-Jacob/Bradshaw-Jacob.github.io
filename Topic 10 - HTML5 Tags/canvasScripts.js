function drawLine() {
	var canvas = document.getElementById('lineCanvas');
	var ctx = canvas.getContext("2d");
	ctx.moveTo(0,0);
	ctx.lineTo(150,75);
	ctx.stroke();
}

function fill() {
	var canvas = document.getElementById('lineCanvas');
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,150,75);
	ctx.stroke();
}

function circle() {
	var canvas = document.getElementById('lineCanvas');
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();
}