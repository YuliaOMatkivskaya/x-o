let cells = document.querySelectorAll('td');

function isVictory(cells) {
	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let comb of combs) {
		if (
			cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
			cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
			cells[comb[0]].innerHTML != ''
		) {
			return true;
		}
	}
	
	return false;
}

function start(cells) {
    let move = 0;
	for (let cell of cells) {
		cell.addEventListener('click', function step() {
			if (move % 2 == 0) {
				this.innerHTML = 'X';
			} else {
				this.innerHTML = '0';
			}
            this.removeEventListener('click', step);
            if (isVictory(cells)) {
				alert(`победа ${this.innerHTML}`);
			}else if (move == 8) {
				alert('ничья');
			}
			move++;
		});
	}
}

start(cells);

