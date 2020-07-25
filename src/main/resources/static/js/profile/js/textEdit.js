// edit buttons
//var aboutEditButton = document.getElementById("aboutEditButton");
var homeEditButton = document.getElementById("homeEditButton");
var currentEditButton = document.getElementById("currentEditButton");
var emailEditButton = document.getElementById("emailEditButton");
var phoneEditButton = document.getElementById("phoneEditButton");
// cancel buttons
//var aboutCancelButton = document.getElementById("aboutCancelButton");
var homeCancelButton = document.getElementById("homeCancelButton");
var currentCancelButton = document.getElementById("currentCancelButton");
var emailCancelButton = document.getElementById("emailCancelButton");
var phoneCancelButton = document.getElementById("phoneCancelButton");
// edit buttons set
//aboutEditButton.innerHTML = '<span class="icon1 icon-edit" onclick="editView(\'aboutText\', \'aboutEditBox\')"></span>';
homeEditButton.innerHTML = '<span class="icon1 icon-pencil" onclick="editView(\'homeText\', \'homeEditBox\')"></span>';
currentEditButton.innerHTML = '<span class="icon1 icon-pencil" onclick="editView(\'currentText\', \'currentEditBox\')"></span>';
emailEditButton.innerHTML = '<span class="icon1 icon-pencil" onclick="editView(\'emailText\', \'emailEditBox\')"></span>';
phoneEditButton.innerHTML = '<span class="icon1 icon-pencil" onclick="editView(\'phoneText\', \'phoneEditBox\')"></span>';

var tempText;
var isActive = false;

function editView(text, editBox) {
	var thisText = document.getElementById(text);
	var thisEditBox = document.getElementById(editBox);

	if (text == "aboutText" && !isActive) {
		isActive = true;
		thisEditBox.innerHTML = '<form method="POST"><div class="form-group"><input type="hidden" name="updateType" value="about"><input type="text" id="about" name="updateValue" value="'+thisText.firstChild.nodeValue+'" class="" onchange="About(\'about\', \'aboutStatus\')" required></div><div id="aboutStatus"></div><div class="form-group"><input type="submit" id="btn" class="" value="OK" style="width: 80px;"></div></form>';
		aboutEditButton.innerHTML="";
		aboutCancelButton.innerHTML = '<span class="icon1 icon-cross" onclick="cancelView(\''+text+'\', \''+editBox+'\')"></span>';
		tempText = thisText.firstChild.nodeValue;
		thisText.innerHTML="";
	}
	if (text == "homeText" && !isActive) {
		isActive = true;
		thisEditBox.innerHTML = '<form method="POST"><div class="form-group"><input type="hidden" name="updateType" value="home"><input type="text" id="homeAddress" name="updateValue" value="'+thisText.firstChild.nodeValue+'" class="" onchange="HomeAddress(\'homeAddress\', \'homeStatus\')" required></div><div id="homeStatus"></div><div class="form-group"><input type="submit" id="btn" class="" value="OK" style="width: 80px;"></div></form>';
		homeEditButton.innerHTML="";
		homeCancelButton.innerHTML = '<span class="icon1 icon-cross" onclick="cancelView(\''+text+'\', \''+editBox+'\')"></span>';
		tempText = thisText.firstChild.nodeValue;
		thisText.innerHTML="";
	}
	if (text == "currentText" && !isActive) {
		isActive = true;
		thisEditBox.innerHTML = '<form method="POST"><div class="form-group"><input type="hidden" name="updateType" value="current"><input type="text" id="currentAddress" name="updateValue" value="'+thisText.firstChild.nodeValue+'" class="" onchange="CurrentAddress(\'currentAddress\', \'currentStatus\')" required></div><div id="currentStatus"></div><div class="form-group"><input type="submit" id="btn" class="" value="OK" style="width: 80px;"></div></form>';
		currentEditButton.innerHTML="";
		currentCancelButton.innerHTML = '<span class="icon1 icon-cross" onclick="cancelView(\''+text+'\', \''+editBox+'\')"></span>';
		tempText = thisText.firstChild.nodeValue;
		thisText.innerHTML="";
	}
	if (text == "emailText" && !isActive) {
		isActive = true;
		thisEditBox.innerHTML = '<form method="POST"><div class="form-group"><input type="hidden" name="updateType" value="email"><input type="text" id="email" name="updateValue" value="'+thisText.firstChild.nodeValue+'" class="" onchange="Email(\'email\', \'emailStatus\')" required></div><div id="emailStatus"></div><div class="form-group"><input type="submit" id="btn" class="" value="OK" style="width: 80px;"></div></form>';
		emailEditButton.innerHTML="";
		emailCancelButton.innerHTML = '<span class="icon1 icon-cross" onclick="cancelView(\''+text+'\', \''+editBox+'\')"></span>';
		tempText = thisText.firstChild.nodeValue;
		thisText.innerHTML="";
	}
	if (text == "phoneText" && !isActive) {
		isActive = true;
		thisEditBox.innerHTML = '<form method="POST"><div class="form-group"><input type="hidden" name="updateType" value="phone"><input type="text" id="phone" name="updateValue" value="'+thisText.firstChild.nodeValue+'" class="" onchange="PhoneUpdate(\'phone\', \'phoneStatus\')" required></div><div id="phoneStatus"></div><div class="form-group"><input type="submit" id="btn" class="" value="OK" style="width: 80px;"></div></form>';
		phoneEditButton.innerHTML="";
		phoneCancelButton.innerHTML = '<span class="icon1 icon-cross" onclick="cancelView(\''+text+'\', \''+editBox+'\')"></span>';
		tempText = thisText.firstChild.nodeValue;
		thisText.innerHTML="";
	}
}

function cancelView(textId, editBox) {
	var thisTextId = document.getElementById(textId);
	var thisEditBox = document.getElementById(editBox);

	if (textId == "aboutText") {
		isActive = false;
		aboutCancelButton.innerHTML = "";
		aboutEditButton.innerHTML = '<span class="icon1 icon-pencil" onclick="editView(\''+textId+'\', \''+editBox+'\')"></span>';
	}
	if (textId == "homeText") {
		isActive = false;
		homeCancelButton.innerHTML = "";
		homeEditButton.innerHTML = '<span class="icon1 icon-pencil" onclick="editView(\''+textId+'\', \''+editBox+'\')"></span>';
	}
	if (textId == "currentText") {
		isActive = false;
		currentCancelButton.innerHTML = "";
		currentEditButton.innerHTML = '<span class="icon1 icon-pencil" onclick="editView(\''+textId+'\', \''+editBox+'\')"></span>';
	}
	if (textId == "emailText") {
		isActive = false;
		emailCancelButton.innerHTML = "";
		emailEditButton.innerHTML = '<span class="icon1 icon-pencil" onclick="editView(\''+textId+'\', \''+editBox+'\')"></span>';
	}
	if (textId == "phoneText") {
		isActive = false;
		phoneCancelButton.innerHTML = "";
		phoneEditButton.innerHTML = '<span class="icon1 icon-pencil" onclick="editView(\''+textId+'\', \''+editBox+'\')"></span>';
	}

	thisEditBox.innerHTML = "";
	thisTextId.innerHTML = tempText;
}