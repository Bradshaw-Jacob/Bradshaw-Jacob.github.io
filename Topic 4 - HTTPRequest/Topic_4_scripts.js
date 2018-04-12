let apiRequest = new XMLHttpRequest();
let url = "https://api.github.com/users/Bradshaw-Jacob/repos";

function call() {
	apiRequest.open("GET",url,false);
	apiRequest.send();
	console.log(apiRequest.readyState);
	repos();
}


function repos() {
	let responseData = JSON.parse(apiRequest.response);
	let names = [];
	let amount = responseData.length;
	for (var i = 0; i < responseData.length; i++) {
		console.log(responseData[i]["name"]);
		names.push("<br>" + responseData[i]["name"]);
	}
	document.getElementById('amount').innerHTML = amount;
	document.getElementById('repoNames').innerHTML = names;
}
//https://api.github.com/users/Bradshaw-Jacob/repos
//https://api.github.com/repos/Bradshaw-Jacob/images_descriptions/Glock Diagram.png
//https://github.com/downloads/Bradshaw-Jacob/images_descriptions/Glock Diagram.png