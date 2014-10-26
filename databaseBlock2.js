 // Populate the database 
    //
    function populateDB(tx) {
	tx.executeSql('UPDATE HIGHSCORESTABLE SET data="'+correctAnswers+'" WHERE id='+difficultyTable+'');
	db.transaction(exit);
    }

 function exit() {
	navigator.app.backHistory();
    }

function doNothing() {
}

    // Query the database
    //
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM HIGHSCORESTABLE', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
	yourBestTime = results.rows.item(difficultyTable).data;
	if(correctAnswers > yourBestTime) {
					if(difficultyTable != 25){
					if(correctAnswers >= unlockNextLevel && yourBestTime < unlockNextLevel) {
		     			  navigator.notification.alert(
			 		   'You opened a new level',  // message
					    doNothing(),         // callback
					    'NEW LEVEL',            // title
					    'OK'                  // buttonName
			);	
			}}
			  navigator.notification.alert(
			    'You made a new record. You got ' + correctAnswers + ' correct',  // message
			    db.transaction(populateDB, errorCB),         // callback
			    'NEW RECORD',            // title
			    'Done'                  // buttonName
			);	
		} 
	else if (correctAnswers == 25 && yourBestTime == 25) {
			  navigator.notification.alert(
			    'Time to face harder levels?',  // message
			    db.transaction(populateDB, errorCB),         // callback
			    'TOO EASY?',            // title
			    'Done'                  // buttonName
			);	
		}
	else {
		       navigator.notification.alert(
			    'You only got ' + correctAnswers + ' correct',  // message
			    exit(),         // callback
			    'Game Over',            // title
			    'OK'                  // buttonName
			);	
		}
    }

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }


