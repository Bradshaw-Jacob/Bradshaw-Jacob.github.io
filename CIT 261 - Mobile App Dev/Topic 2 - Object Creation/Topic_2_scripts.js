//object literal examples
/*
var car1 = {make:"Ford", model:"Mustang", firstYear:"1964"};


var car2 = {
    make:"Dodge", 
    model:"Charger", 
    firstYear:"1966",
    fullName: function() {return this.make + " " + this.model}
};
*/
function Car(make, model, year, color) {
 		this.make = make;
  		this.model = model;
  		this.year = year;
        this.color = color;
}

var mycar = new Car('Eagle', 'Talon TSi', 1993);

function newInstance() {
	document.getElementById('car_Instance').innerHTML = Object.values(mycar);
};

function addColor() {
	var radio = document.getElementsByName("color");
	var isChecked = false;
	for (var i = 0; i < radio.length; i++) {
		if(radio[i].checked) {
			isChecked = true;
			mycar.color = radio[i].value;
			break;
		}
	}
	if (!isChecked) {
		alert("Please select a color");
	}
}