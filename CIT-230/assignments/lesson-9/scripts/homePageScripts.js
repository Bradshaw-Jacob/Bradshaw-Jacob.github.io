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
      
/*
function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Former: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];

    for (var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
*/