// Save high score to localStorage
function saveHighScore() {
	const highscores = getHighScores();
	highscores[difficultyTable] = totalTime;
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
	
	if (totalTime < yourBestTime || yourBestTime == 0) {
		alert('You made a new record. Your time was ' + totalTime + ' sec');
		
		if (highscores[15] != 0 || (difficultyTable == 15 && highscores[15] == 0)) {
			let allTimesBlock = 0;
			let newAllTimesBlock = 0;
			for (let i = 6; i <= 15; i++) {
				allTimesBlock = parseFloat(highscores[i] || 0) + allTimesBlock;
			}
			newAllTimesBlock = allTimesBlock - parseFloat(yourBestTime) + parseFloat(totalTime);
			if ((allTimesBlock > 1000 && newAllTimesBlock <= 1000) ||
				(highscores[15] == 0 && newAllTimesBlock <= 1000)) {
				alert('You unlocked a new block');
			}
		}

		if (difficultyTable != 15) {
			if (totalTime < unlockNextLevel && (yourBestTime > unlockNextLevel || yourBestTime == 0)) {
				alert('You opened a new level');
				doNothing();
			}
		}
		
		saveHighScore();
	} else {
		alert('Your time was ' + totalTime + ' sec');
		exit();
	}
}
