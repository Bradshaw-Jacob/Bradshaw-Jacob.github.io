var high = document.getElementById('highTemp').innerHTML;

var low = document.getElementById('lowTemp').innerHTML;

var t = (parseInt(high) + parseInt(low)) / 2;

var speed = document.getElementById('windSpeed').innerHTML;

var s = Math.pow(parseInt(speed), 0.16);

var f = Math.round(35.74 + 0.6215*t - 35.75*s + 0.4275*t*s);

document.getElementById('windChill').innerHTML = f;
