var x = 0;
var y = 0;

//Code to move the ball with the mouse.

document.addEventListener('click', function(locations){
	console.log(locations);

	var f = document.getElementById('ball');
	//f.style.position = "absolute";

	y = locations.clientY-25;
	x = locations.clientX-25;

    f.style.transform = 'translateY('+(locations.clientY-25-f.offsetTop)+'px)';
    f.style.transform += 'translateX('+(locations.clientX-25-f.offsetLeft)+'px)';
},false);



//Below is the code so that you can move th ball with the Arrow Keys.

document.addEventListener('keydown', function(keyData) {
	console.log(keyData);
	var f = document.getElementById('ball');
	switch (keyData.key){
		case "ArrowUp":
			y += -25;
			f.style.transform = 'translateY(' + y + 'px) translateX('+ x +'px)';
			break;
		case "ArrowDown":
			y += 25;
			f.style.transform = 'translateY(' + y + 'px) translateX('+ x +'px)';
			break;
		case "ArrowLeft":
			x += -25;
			f.style.transform = 'translateY(' + y + 'px) translateX('+ x +'px)';
			break;
		case "ArrowRight":
			x += 25;
			f.style.transform = 'translateY(' + y + 'px) translateX('+ x +'px)';
			break;
	}
},false);