var wantedNumber;
var db = window.openDatabase("Database", "1.0", "Cordova", 200000);
var randomArrayNumbers = new Array();
var yourBestTime = 0;
var totalTime = 0;
var correctAnswers = -1;

db.transaction(queryDBVibrationOff, errorCBVibrationOff);
makeTable();

function quessClick(num, id) {
	if (num == wantedNumber) {
		randomNumber();
		document.getElementById(id).removeAttribute("onmousedown");
		document.getElementById(id).removeAttribute("name"); // Selenium testing
		document.getElementById(id).classList.add("guessbuttondisabled");
		document.getElementById(id).classList.remove("guessbutton");
	} else {
		wrongQuess();
	}
}

randomNumber();
startTime();
