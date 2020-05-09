let wantedNumber;
let db = window.openDatabase("Database", "1.0", "Cordova", 200000);
let randomArrayNumbers = new Array();
let yourBestTime = 0;
let totalTime = 0;
let correctAnswers = -1;

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
