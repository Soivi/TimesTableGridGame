var vibrationOff = 0;

function queryDBVibrationOff(tx) {
    tx.executeSql('SELECT * FROM HIGHSCORESTABLE', [], querySuccessVibrationOff, errorCBVibrationOff);
}

// Query the success callback
function querySuccessVibrationOff(tx, results) {
    vibrationOff = results.rows.item(0).data;
}

// Transaction error callback
function errorCBVibrationOff(err) {
    console.log("Error processing SQL: " + err.code);
}
