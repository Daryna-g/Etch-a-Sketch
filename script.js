let color = 'black';
const blackBtn = document.getElementById("black");
const grayBtn = document.getElementById("gray");

function populateBoard(size) {
	let board = document.querySelector(".board");
	let squares = board.querySelectorAll("div");
	squares.forEach((div) => div.remove());
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	let amount = size * size;
	for (let i = 0; i < amount; i++) {
		let square = document.createElement("div");

		square.addEventListener("mouseover", colorSquares);

		// square.style.backgroundColor = "blue";
		board.insertAdjacentElement('beforeend', square);
		square.classList.add("cell");
	}
}

populateBoard(16);

function changeSize(input) {
	if (input >= 2 || input <= 100) {
		populateBoard(input);
	} else {
		console.log('Too many squares');
	}
}





function colorSquares() {
	this.style.backgroundColor = color;
}
// colorSquares('black');

function changeColor(choise) {
	color = choise;
}

blackBtn.addEventListener("click", () => changeColor("black"));
grayBtn.addEventListener("click", () => changeColor('gray'));