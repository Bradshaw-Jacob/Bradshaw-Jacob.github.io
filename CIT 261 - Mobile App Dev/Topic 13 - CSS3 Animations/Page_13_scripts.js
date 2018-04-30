function listener() {
	var myVar = setInterval(playAudio(), 0);
	micDrop = document.getElementById("microphone");
	micDrop.className = "falling";
	console.log("class assigned");



}
function playAudio() {
	var x = document.getElementById("Drop_SFX");
	x.play();
}
