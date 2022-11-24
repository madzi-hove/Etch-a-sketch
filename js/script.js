//DOM variables
const menuContainer = document.querySelector(".menu-container");
const canvas = document.querySelector(".canvas__item");
const height = canvas.offsetHeight;
// canvas.style.maxWidth = height + "px";
console.log(canvas, height);

for (let i = 0; i < 16; i++) {
	const gridCell = document.createElement("div");
	gridCell.classList.add("cell");
	canvas.append(gridCell);
}

const menuSelection = function (event) {
	console.log(event.target);
};

menuContainer.addEventListener("click", (e) => menuSelection(e));
