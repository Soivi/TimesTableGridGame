// Populate the database 
function populateDB(tx) {
	tx.executeSql('UPDATE HIGHSCORESTABLE SET data="' + correctAnswers + '" WHERE id=' + difficultyTable + '');
	db.transaction(exit);
}

function exit() {
	window.history.back();
}

function doNothing() {
}

// Query the database
function queryDB(tx) {
	tx.executeSql('SELECT * FROM HIGHSCORESTABLE', [], querySuccess, errorCB);
}

// Query the success callback
function querySuccess(tx, results) {
	yourBestTime = results.rows.item(difficultyTable).data;
	if (correctAnswers > yourBestTime) {
		if (difficultyTable != 25) {
			if (correctAnswers >= unlockNextLevel && yourBestTime < unlockNextLevel) {
				alert('You opened a new level');
				doNothing();
			}
		}
		alert('You made a new record. You got ' + correctAnswers + ' correct');
		db.transaction(populateDB, errorCB)
	}
	else if (correctAnswers == 25 && yourBestTime == 25) {
		alert('Time to face harder levels?');
		db.transaction(populateDB, errorCB);
	}
	else {
		alert('You only got ' + correctAnswers + ' correct');
		exit();
	}
}

// Transaction error callback
function errorCB(err) {
	console.log("Error processing SQL: " + err.code);
}
