function randomNumber() {
    correctAnswers++;
    if(correctAnswers==answersToWin){
    gameOver();
    }
    else{
    var isFound = false;
    	while(!isFound) {
    		var randomNumber = Math.floor(Math.random()*25);
    		wantedNumber = randomArrayNumbers[randomNumber];
    		if(wantedNumber!=null){
    			isFound=true;
    			randomArrayNumbers[randomNumber] = null;
    		}
    }	
	document.getElementById('infoRandomNumber').innerHTML = "PRODUCT: " + wantedNumber;
	document.getElementById('infoCorrectAnswers').innerHTML = " CORRECT: " + correctAnswers + "/" + answersToWin;
	}
}

	
	
function quessNumber(quessedNumber) {
	if(quessedNumber==wantedNumber) {
	randomNumber();
	}else{
	wrongQuess();
	}
}

