	function startTime(){
	document.getElementById('infoTime').innerHTML= "Time: " + Math.round((endingTime - new Date().getTime())/1000);
	if((endingTime - new Date().getTime())<0){
	timeOver();
	}		
	t=setTimeout(function(){startTime()},500);
	}


	function timeOver(){
		    gameOver();
	}

	function wrongQuess() {
	if(vibrationOff==0){
		navigator.notification.vibrate(500);	// Vibrate for 0.5 seconds
	}
	endingTime= endingTime-5000;
	}

	function gameOver(){
	totalTime = (endingTime - new Date().getTime())/1000;
        db.transaction(queryDB, errorCB);
}