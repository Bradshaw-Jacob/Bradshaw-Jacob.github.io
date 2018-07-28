var conditions = document.getElementById('weatherDescription');
var cTemp = document.getElementById('currentTemp');
var humid = document.getElementById('humidity');
var wSpeed = document.getElementById('windSpeed');
var icon = document.getElementById('icon');

function getCityId() {
	var cityId = 0;
	console.log(document.getElementsByClassName('active')[0].innerText);
	switch (document.getElementsByClassName('active')[0].innerText) {
		case "Franklin":
			cityId = 4156210;
			break;
		case "Greenville":
			cityId = 5255099;
			break;
		case "Springfield":
			cityId = 4787117;
			break;
	}
	return cityId;
}

var request = new XMLHttpRequest();
request.open('Get', 'https://api.openweathermap.org/data/2.5/weather?id=' + getCityId() + '&units=imperial&APPID=4b86256971b16a6fd34fac285b359429');
request.responseType = 'json';
request.send();

request.onload = function() {
    var cityData = request.response;
    pushData(cityData);
}

function pushData(cityData) {
	conditions.innerHTML = cityData.weather[0].main;
	cTemp.innerHTML = cityData.main.temp;
	humid.innerHTML = cityData.main.humidity;
	wSpeed.innerHTML = cityData.wind.speed;
	icon.src = 'https://api.openweathermap.org/img/w/' + cityData.weather[0].icon + '.png';
}
