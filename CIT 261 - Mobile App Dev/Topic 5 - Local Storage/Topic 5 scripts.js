function storeLocal() {
	var name = document.getElementById("firstName").value;
	var stringName = JSON.stringify(name);

	if (typeof(Storage) !== "undefined"){
		localStorage.setItem('fullName', stringName);
		console.log("Name stored");
	} else {
		document.getElementById("localOutput").innerHTML = "Your browser does not support web storage."
	}

	getName();
}

function getName() {
	var parsedName = JSON.parse(localStorage.getItem('fullName'));
	document.getElementById("localOutput").innerHTML = "Welcome " + parsedName;
}

function clearAll() {
	localStorage.clear();
}