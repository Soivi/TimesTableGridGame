	var wantedNumber;
	var db = window.openDatabase("Database", "1.0", "Cordova", 200000);
	var randomArrayNumbers = new Array();
	var yourBestTime = 0;
	var totalTime = 0;
	var correctAnswers = -1;

db.transaction(queryDBVibrationOff, errorCBVibrationOff);
makeTable();
$('.guessbutton').mousedown(function(e) {
	var num = $(this).attr('id');
	if (num == wantedNumber) {
		randomNumber();
		$(this).attr('disabled', 'true');
	} else {
		wrongQuess();
	}
});

randomNumber();
startTime();
