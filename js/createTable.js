function makeTable() {
	let rows = 5;
	let cols = 5;
	let cellNum = 0;
	let UpRowCols = xMultiplication;
	let leftCols = yMultiplication;

	let theTable = document.getElementById('theTable');

	let newTr = document.createElement('tr');
	let newTd = document.createElement('td');
	newTr.appendChild(newTd);
	for (let h = 0; h < cols; h++) {
		let newTd = document.createElement('td');
		let textNode = document.createTextNode(UpRowCols);
		UpRowCols++;
		newTd.appendChild(textNode);
		newTr.appendChild(newTd);
	}
	theTable.appendChild(newTr);

	let t = 0;
	for (let i = 0; i < rows; i++) {
		let newTr = document.createElement('tr');

		let newTd = document.createElement('td');
		let textNode = document.createTextNode(leftCols);
		leftCols++;
		newTd.appendChild(textNode);
		newTr.appendChild(newTd);
		for (let k = 0; k < cols; k++) {
			let newTd = document.createElement('td');

			newTd.setAttribute('class', 'guessbutton');
			newTd.setAttribute('id', cellNum);
			newTd.setAttribute('name', (i + yMultiplication) * (k + xMultiplication)); // For selenium testing
			newTd.setAttribute('onmousedown', 'guessClick(' + (i + yMultiplication) * (k + xMultiplication) + ', ' + cellNum + ')');

			randomArrayNumbers[t] = (i + yMultiplication) * (k + xMultiplication);
			t++;
			//For debugging. Give answers to buttons
			//let answer = document.createTextNode((i+yMultiplication)*(k+xMultiplication));
			//newTd.appendChild(answer);

			newTr.appendChild(newTd);
			cellNum++;
		}
		theTable.appendChild(newTr);
	}
}
