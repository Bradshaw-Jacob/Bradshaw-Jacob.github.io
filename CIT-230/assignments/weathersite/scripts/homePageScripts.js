var headers = document.getElementsByTagName('h2');
var para = document.getElementsByClassName('stats');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('Get', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var cityData = request.response;
    populateHeaders(cityData);
}

function populateHeaders(cityData) {
    var mappedCityData = {};
    for (var i = 0; i < cityData.towns.length; i++) {
      mappedCityData[cityData.towns[i].name] = cityData.towns[i];
    }   
    for (var j = 0; j < 3; j++) {
      para[j].innerHTML = "Motto: " + mappedCityData[(headers[j].innerHTML)].motto + "<br>" + "Year Founded: " + mappedCityData[(headers[j].innerHTML)].yearFounded + "<br>" + "Population: " + mappedCityData[(headers[j].innerHTML)].currentPopulation + "<br>" + "Annual Rainfall: " + mappedCityData[(headers[j].innerHTML)].averageRainfall;
    }
}
      