const container = document.querySelector('.container')

let stop = false;

function getRandomBlue() {
	const hue = (Math.random() * 15) + 40;
	return `hsla(221, 50%, ${hue}%, .5)`;
}

function poputalePieces() {
	let html = '';
	for (let i = 0; i < totalSquares; i++) {
		const onOff = Math.floor(Math.random() * 4) + 1;
		if (onOff === 1) {
			html += `<div class="game-piece on" id=${i}></div>`;
		} else {
			html += `<div class="game-piece" id=${i}></div>`
		}

	}
	container.innerHTML = html;
	
	document.querySelectorAll('.game-piece').forEach(piece => {
		piece.addEventListener('click', handleClick)
		piece.addEventListener('touchstart', handleClick)
	});
}

function start() {
	stop = false;
	const interval = setInterval(function() {
		if (stop) clearInterval(interval)
		else {
			makeMove();
		}
	}, 200)
}

function clear() {
	pause();
	const gamePieces = Array.from(document.querySelectorAll('.game-piece'));
	gamePieces.forEach(gamePiece => document.getElementById(gamePiece.id).classList.remove('on'));
}

function pause() {
	stop = true;
}

function makeMove() {
	// get game pieces and loop over them
	const gamePieces = Array.from(document.querySelectorAll('.game-piece'));
	const currentGameState = gamePieces.map(piece => piece.classList[1]);
	
	let movesLeft = false;
	
	gamePieces.forEach(gamePiece => {
		
		const id = parseInt(gamePiece.id);
		if (currentGameState[id]) movesLeft = true;

		const squares = totalSquares - 1;

		// get number of neighbors
		let neighbors = 0;
		const neighborsList = [	(id - columns - 1 + squares) % squares,
														(id - columns + squares) % squares,
														(id - columns + 1 + squares) % squares,
														(id - 1 + squares) % squares,
														(id + 1) % squares,
														(id + columns - 1) % squares,
														(id + columns) % squares,
														(id + columns + 1) % totalSquares ];	

		neighborsList.forEach(neighbor => {
			if (currentGameState[neighbor]) neighbors++;
		});

		//1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
		if (neighbors < 2) {
			gamePiece.classList.remove('on');
			gamePiece.style.background = 'none';
		}

		// 2. Any live cell with two or three live neighbours lives on to the next generation.

		//3. Any live cell with more than three live neighbours dies, as if by overpopulation.
		else if (currentGameState[id] && neighbors > 3) {
			gamePiece.classList.remove('on');
			gamePiece.style.background = 'none';
		} 

		//4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
		else if (!currentGameState[id] && neighbors === 3) {
			gamePiece.classList.add('on');
			gamePiece.style.background = getRandomBlue();
		}

	});
	if (!movesLeft) clear();
}

function handleClick(e) {	
	document.getElementById(e.currentTarget.id).classList.toggle('on');
}

function handleResize() {
	width = window.innerWidth + 15;
	height = window.innerHeight + 15;
	columns = Math.floor(width / 15);
	rows = Math.floor(height / 15);
	totalSquares = columns * rows;
	
	container.style.width = width;
	container.style.height = height;
	container.style['grid-template-rows'] = `repeat(${rows}, 15px)`;
	container.style['grid-template-columns'] = `repeat(${columns}, 15px)`;
	poputalePieces();
	start();
}


// start
handleResize();

window.addEventListener('resize', handleResize);


