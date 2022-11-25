//DOM variables
const root = document.querySelector(":root");
const menuContainer = document.querySelector(".menu-container");
const canvas = document.querySelector(".canvas__item");
const gridSize = document.querySelector("#grid-size");
const gridSizeDisplay = document.querySelector(".grid-size-display");

let gridCell;
let penColour = "";
let target = "";
const rootStyles = getComputedStyle(root);
let size = +rootStyles.getPropertyValue("--grid-size");

gridSizeDisplay.innerText = `${size} X ${size}`;

const createGrid = function (size) {
	for (let i = 0; i < size ** 2; i++) {
		gridCell = document.createElement("div");
		gridCell.setAttribute("id", `cell${i}`);
		gridCell.classList.add("cell");
		canvas.append(gridCell);
	}
};

const deleteGrid = function () {
	const list = [...document.querySelectorAll(".cell")];
	list.forEach((element) => element.remove());
};

const clearGrid = function () {
	const list = [...document.querySelectorAll(".cell")];
	list.forEach((element) => (element.style.backgroundColor = "#fff"));
};

const hideGrid = function () {
	const list = [...document.querySelectorAll(".cell")];
	list.forEach((element) => element.classList.toggle("hide-grid"));
};

const randomColour = function () {
	const colours = [];
	for (let i = 0; i < 3; i++) {
		colours.push(Math.floor(Math.random() * 256));
	}
	return `rgb(${colours[0]}, ${colours[1]}, ${colours[2]})`;
};

const buttonOptions = function (event) {
	if (event.target.id === "clear") {
		clearGrid();
	}
	if (event.target.id === "show-grid") {
		hideGrid();
	}
	target = event.target.id;
};

const inputOptions = function (event) {
	if (event.target.id === "colour-picker") {
		penColour = event.target.value;
	}

	if (event.target.id === "grid-size") {
		deleteGrid();
		size = event.target.value;
		root.style.setProperty("--grid-size", size);
		createGrid(size);
		gridSizeDisplay.innerText = `${size} X ${size}`;
	}
};

window.onload = () => createGrid(size);
menuContainer.addEventListener("click", (e) => buttonOptions(e));
menuContainer.addEventListener("change", (e) => inputOptions(e));
canvas.addEventListener("mouseover", (e) => {
	if (e.target.id !== "canvas") {
		switch (target) {
			case "random-colour":
				e.target.style.backgroundColor = randomColour();
				break;
			case "colour-picker":
				console.log(penColour);
				e.target.style.backgroundColor = penColour;
				break;
		}
	}
});
