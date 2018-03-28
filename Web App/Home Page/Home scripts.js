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



function predictSearch() {
	var guns = ["ar-15", "glock", "1911"];
	var searchText = searchBar.value;
	var predictText = document.getElementById('behind_PredictText');

	if(searchText === "") {
		predictText.value = '';
	}
	else {
		for(var i = 0; i < guns.length; i++){
			if(guns[i].indexOf(searchText.toLowerCase())==0)
			{
				var currentLength = searchText.length;
				predictText.value = searchText+""+guns[i].substring(currentLength);
			}
		}
	}
};