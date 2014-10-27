	
	
	function makeTable() {
			var rows = 5;
			var cols = 5;
			var UpRowCols = xMultiplication;
			var leftCols = yMultiplication;
			
			var theTable = document.getElementById('theTable');
			
			var newTr = document.createElement('tr');
					var newTd = document.createElement('td');
					newTr.appendChild(newTd);	
			for (var h = 0; h < cols; h++) {
					var newTd = document.createElement('td');
					var textNode = document.createTextNode(UpRowCols);
					UpRowCols++;
					newTd.appendChild(textNode);
					newTr.appendChild(newTd);
					}
			theTable.appendChild(newTr);
			
			
			var t = 0;
			for (var i = 0; i < rows; i++) {
					var newTr = document.createElement('tr');
					
					var newTd = document.createElement('td');
					var textNode = document.createTextNode(leftCols);
					leftCols++;
					newTd.appendChild(textNode);
					newTr.appendChild(newTd);
					for (var k = 0; k < cols; k++) {
						var newTd = document.createElement('td');
						var button = document.createElement('button');
						//For debugging. Give answers to buttons
						button.setAttribute('onclick', 'quessNumber('+((i+yMultiplication)*(k+xMultiplication))+');');
						
						button.setAttribute('class', 'guessbutton');
						button.setAttribute('id', ((i+yMultiplication)*(k+xMultiplication)));
						//For debugging. Give answers to buttons
						var teksti = document.createTextNode((i+yMultiplication)*(k+xMultiplication));
						
						randomArrayNumbers[t] = (i+yMultiplication)*(k+xMultiplication);
						t++;
						//For debugging. Give answers to buttons
						button.appendChild(teksti);
						
						newTd.appendChild(button);
						newTr.appendChild(newTd);
					}
					theTable.appendChild(newTr);	
				}
	}
