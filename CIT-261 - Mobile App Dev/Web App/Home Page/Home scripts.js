//Text Predictor
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

//HTTPRequest
let apiRequest = new XMLHttpRequest();
let url = "https://api.github.com/repos/Bradshaw-Jacob/images_descriptions/contents/Glock Diagram.png";

function images() {
	var responseData = JSON.parse(apiRequest.response);
	let image = responseData.content;
	var source = responseData.download_url;
	temp = document.getElementById('cardImage');
	light = document.getElementById('lightContent');
	temp.src = source;
	light.src = source;
}

function call() {
	apiRequest.open("GET",url,false);
	apiRequest.send();
	images();
	showSearch();
}

//Hide buttons & Show search results
function master() {
		hideButtons();
		var delayedCall = setTimeout(call, 6000);
}

function hideButtons() {
	var buttonsBox = document.getElementById('homeButtons');
	buttonsBox.classList.add('horiMoveLeft');
	var removeDiv = setTimeout(function(){
		buttonsBox.style.display = 'none';
	}, 1000);
	var loader = setTimeout(function() {
		document.getElementById('loaderSection').classList.remove('hide');
	}, 1000);
}
function hideLoader() {
	var loaderBox = document.getElementById('loaderSection');
	loaderBox.classList.add('horiMoveRight');
	var removeBox = setTimeout(function() {
		loaderBox.style.display = 'none';
	}, 1000);
}

function showSearch() {
	hideLoader();
	var show = setTimeout(function() {
		document.getElementById('searchResults').classList.remove('hide');
	}, 1000);
}


//Image Light Box
function openLightBox() {
	document.getElementById('lightBox').classList.remove('hide');
}

function closeLightBox() {
	document.getElementById('lightBox').classList.add('hide');
}


function closeAppDescript() {
	document.getElementById('appDescript_containter').classList.add('hide');
}












