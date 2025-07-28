let color = 'black';
let click = true;
const blackBtn = document.getElementById("black");
const grayBtn = document.getElementById("gray");
const randomBtn = document.getElementById("random");
const eraseBtn = document.getElementById("erase");
const resetBtn = document.getElementById("reset");

const customColorInput = document.getElementById("customColor");


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
	if (input >= 2 && input <= 100) {
		document.querySelector(".error-message").style.display = 'none';
		populateBoard(input);
	} else {
		document.querySelector(".error-message").style.display = 'flex';
	}
}

function colorSquares() {
	if (click) {
		if (color === "random") {
			this.style.backgroundColor = `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
		} else {
			this.style.backgroundColor = color;
		}
	}

}

function changeColor(choise) {
	color = choise;
}

customColorInput.addEventListener("input", (e) => {
	changeColor(e.target.value);
});

function resetBoard() {
	let board = document.querySelector(".board");
	let squares = board.querySelectorAll("div");
	squares.forEach((div) => div.style.backgroundColor = "#bbbbbb");
}

blackBtn.addEventListener("click", () => changeColor('black'));
grayBtn.addEventListener("click", () => changeColor('gray'));
randomBtn.addEventListener("click", () => changeColor('random'));
eraseBtn.addEventListener("click", () => changeColor('#bbbbbb'));
resetBtn.addEventListener("click", () => resetBoard());

document.querySelector('body').addEventListener('click', () => {
	click = !click;
});