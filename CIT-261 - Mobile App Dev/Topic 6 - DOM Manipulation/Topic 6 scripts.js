function userMessage() {
	//create new h1 element
	var newHeader = document.createElement('h1');

	//grab the users message
	var message = document.getElementById('userMessage').value;

	//create text node for the user message
	var newMessage = document.createTextNode(message);

	//Append the new text node to the new header.
	newHeader.appendChild(newMessage);

	var currentDiv = document.getElementById('testBlock');
	document.body.insertBefore(newHeader, currentDiv);

}