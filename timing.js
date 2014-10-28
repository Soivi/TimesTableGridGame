	function startTime(){
	document.getElementById('infoTime').innerHTML= "Time: " + Math.round((new Date().getTime() - startingTime)/1000);
	t=setTimeout(function(){startTime()},500);
	}

		
	function wrongQuess() {
	if(vibrationOff==0){
		navigator.vibrate(500);	// Vibrate for 0.5 seconds
	}
	startingTime= startingTime-5000;
	}

		
	function gameOver(){
	totalTime = (new Date().getTime() - startingTime)/1000;
        db.transaction(queryDB, errorCB);
	}
