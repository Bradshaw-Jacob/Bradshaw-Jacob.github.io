var conditions = document.getElementById('weatherDescription');
var cTemp = document.getElementById('currentTemp');
var humid = document.getElementById('humidity');
var wSpeed = document.getElementById('windSpeed');
var icon = document.getElementById('icon');


var requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=4b86256971b16a6fd34fac285b359429';
var request = new XMLHttpRequest();
request.open('Get', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var franklinData = request.response;
    pushData(franklinData);
}

function pushData(franklinData) {
	conditions.innerHTML = franklinData.weather[0].main;
	cTemp.innerHTML = franklinData.main.temp;
	humid.innerHTML = franklinData.main.humidity;
	wSpeed.innerHTML = franklinData.wind.speed;
	icon.src = 'https://api.openweathermap.org/img/w/' + franklinData.weather[0].icon + '.png';
	windChill(franklinData);
}

function windChill(franklinData) {
	var high = franklinData.main.temp_max;

	var low = franklinData.main.temp_min;

	var t = (parseInt(high) + parseInt(low)) / 2;

	var speed = document.getElementById('windSpeed').innerHTML;

	var s = Math.pow(parseInt(speed), 0.16);

	var f = Math.round(35.74 + 0.6215*t - 35.75*s + 0.4275*t*s);

	document.getElementById('windChill').innerHTML = f;
}
