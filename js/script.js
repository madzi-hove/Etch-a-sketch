//DOM variables
const root = document.querySelector(":root");
const menuContainer = document.querySelector(".menu-container");
const canvas = document.querySelector(".canvas__item");
const gridSize = document.querySelector("#grid-size");
let gridCell;
const gridSizeDisplay = document.querySelector(".grid-size-display");

let penColour = "";
const rootStyles = getComputedStyle(root);
let size = rootStyles.getPropertyValue("--grid-size");

// root.style.setProperty("--grid-size", size);
gridSizeDisplay.innerText = `${size} X ${size}`;

const createGrid = function (size) {
	for (let i = 0; i < size ** 2; i++) {
		gridCell = document.createElement("div");
		gridCell.classList.add("cell");
		canvas.append(gridCell);
	}
};

const deleteGrid = function () {
	const list = [...document.querySelectorAll(".cell")];
	list.forEach((element) => element.remove());
};

const randomColour = function () {
	let colour1, colour2, colour3;
	const colours = [colour1, colour2, colour3];
	colours.map((colour) => {
		colour = Math.floor(Math.random() * 256);
	});
	return `rgb(${colours[0]}, ${colours[1]}, ${colours[2]})`;
};

const mode = function (event) {};

const inputChange = function (event) {
	if (event.target.id === "colour-picker") {
		penColour = event.target.value;
		console.log(penColour);
	}

	if (event.target.id === "grid-size") {
		deleteGrid();
		size = event.target.value;
		root.style.setProperty("--grid-size", size);
		console.log(rootStyles.getPropertyValue("--grid-size"));
		createGrid(size);
		gridSizeDisplay.innerText = `${size} X ${size}`;
	}
};

createGrid(size);
menuContainer.addEventListener("click", (e) => mode(e));
menuContainer.addEventListener("change", (e) => inputChange(e));
