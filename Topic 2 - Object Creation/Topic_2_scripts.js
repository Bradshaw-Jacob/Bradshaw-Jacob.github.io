//object literal

var car1 = {make:"Ford", model:"Mustang", firstYear:"1964"};


var car2 = {
    make:"Dodge", 
    model:"Charger", 
    firstYear:"1966",
    fullName: function() {return this.make + " " + this.model}
};

function Car(make, model, year, color) {
 		this.make = make;
  		this.model = model;
  		this.year = year;
        this.color = color;
}

var mycar = new Car('Eagle', 'Talon TSi', 1993);

var kenscar = new Car('Nissan', '300ZX', 1992, 'Green');
var vpgscar = new Car('Mazda', 'Miata', 1990);

kenscar.color = "Green";

kenscar