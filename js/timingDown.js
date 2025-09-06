function startTime() {
	document.getElementById('infoTime').innerHTML = "Time: " + Math.round((endingTime - new Date().getTime()) / 1000);
	if(correctAnswers < answersToWin) {
		if ((endingTime - new Date().getTime()) < 0) {
			timeOver();
		} else {
			t = setTimeout(function () { startTime() }, 500);
		}
	}
}

function timeOver() {
	gameOver();
}

function wrongGuess() {
	if (vibrationOff == 1) {
		navigator.vibrate(500);	// Vibrate for 0.5 seconds
	}
	endingTime = endingTime - 5000;
}

function gameOver() {
	totalTime = (endingTime - new Date().getTime()) / 1000;
	checkHighScores();
}
