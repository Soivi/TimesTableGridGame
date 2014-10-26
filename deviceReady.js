	db.transaction(queryDBVibrationOff, errorCBVibrationOff);
	document.addEventListener("backbutton", exit, false);
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
