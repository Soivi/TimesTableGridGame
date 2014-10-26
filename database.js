 // Populate the database 
    //
    function populateDB(tx) {
	tx.executeSql('UPDATE HIGHSCORESTABLE SET data="'+totalTime+'" WHERE id='+difficultyTable+'');
	db.transaction(exit);
    }

    function populateDBblocks(tx) {
	tx.executeSql('UPDATE BLOCKS SET data="1" WHERE id=0');
    }

 function exit() {
	window.history.back();
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
	if(totalTime < yourBestTime || yourBestTime == 0 ) {
		if (results.rows.item(15).data != 0 || (difficultyTable == 15 && results.rows.item(15).data == 0)) {
				var allTimesBlock = 0;
				var newAllTimesBlock = 0;
				for (var i = 6; i <= 15; i++) {
		 			allTimesBlock = parseFloat(results.rows.item(i).data) + allTimesBlock;
				}
					newAllTimesBlock = allTimesBlock - parseFloat(yourBestTime) + parseFloat(totalTime);
					if((allTimesBlock > 1000 && newAllTimesBlock <= 1000) || 
						(results.rows.item(15).data == 0 && newAllTimesBlock <= 1000) ){
							alert('You unlocked a new block');	
							db.transaction(populateDBblocks, errorCB);
					}		
		}
		
					if(difficultyTable != 15){
					if(totalTime < unlockNextLevel && (yourBestTime > unlockNextLevel || yourBestTime == 0)) {
		     			  alert('You opened a new level');
						doNothing();	
					}}
			  alert('You made a new record. Your time was ' + totalTime + ' sec');	
		          db.transaction(populateDB, errorCB);
		} else {
		       alert('Your time was ' + totalTime + ' sec');	
		       exit();
		}
    }

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }


