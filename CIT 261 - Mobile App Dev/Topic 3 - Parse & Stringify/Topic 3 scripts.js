function stringifyMe() {
	me = {"name":"Jacob", "height":"5' 10\"", "hobbies":"Playing with my daughter"}
	stringMe = JSON.stringify(me);

	localStorage.setItem("storeMe", stringMe);
	document.getElementById("confirm").innerHTML = "The object has been stringified"
}


function parseMe() {
	retrieveMe = localStorage.getItem("storeMe");
	parseMe = JSON.parse(retrieveMe);


	document.getElementById("name").innerHTML = parseMe.name;
	document.getElementById("height").innerHTML = parseMe.height;
	document.getElementById("hobbies").innerHTML = parseMe.hobbies;
}