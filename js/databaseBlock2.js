// Save high score to localStorage
function saveHighScore() {
	const highscores = getHighScores();
	highscores[difficultyTable] = correctAnswers;
	saveHighScores(highscores);
	exit();
}

function exit() {
	window.history.back();
}

function doNothing() {
}

// Check high scores and handle game completion
function checkHighScores() {
	initializeLocalStorage();
	const highscores = getHighScores();
	
	yourBestTime = highscores[difficultyTable] || 0;
	
	if (correctAnswers > yourBestTime) {
		alert('You made a new record. You got ' + correctAnswers + ' correct');
		
		if (difficultyTable != 25) {
			if (correctAnswers >= unlockNextLevel && yourBestTime < unlockNextLevel) {
				alert('You opened a new level');
				doNothing();
			}
		}
		
		saveHighScore();
	}
	else if (correctAnswers == answersToWin && yourBestTime == answersToWin) {
		alert('Time to face harder levels?');
		saveHighScore();
	}
	else {
		alert('You only got ' + correctAnswers + ' correct');
		exit();
	}
}
