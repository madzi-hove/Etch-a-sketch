//DOM variables
const menuContainer = document.querySelector(".menu-container");
const canvas = document.querySelector(".canvas__item");
const gridSize = document.querySelector("#grid-size");
const gridSizeDisplay = document.querySelector(".grid-size-display");

let penColour = "";
gridSizeDisplay.innerText = `16 X 16`;

for (let i = 0; i < 16; i++) {
	const gridCell = document.createElement("div");
	gridCell.classList.add("cell");
	canvas.append(gridCell);
}

const menuSelection = function (event) {
	console.log(event.target);
	if (event.target.id === "colour-picker") {
		penColour = event.target.value;
		console.log(penColour);
	}

	if (event.target.id === "grid-size") {
		size = event.target.value;
		console.log(size);
		gridSizeDisplay.innerText = `${size} X ${size}`;
	}
};

// menuContainer.addEventListener("click", (e) => menuSelection(e));
menuContainer.addEventListener("change", (e) => menuSelection(e));
