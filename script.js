const colorButtons = document.querySelectorAll(".colorBtns");
const selectSizeBtn = document.querySelector(".selectSizeBtn");
const container = document.querySelector("#container");

// random number function
function randomNum(num) {
    return Math.floor(Math.random() * num)
}

// color options to paint function
function pickColor() {
    const red = `rgb(255,0,0)`;
    const white = `rgb(255, 255, 255)`;
    const black = `rgb(0,0,0)`;

    function rainbowColor () {
        const  rainbow = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
        return rainbow;
    }

    if (this.textContent === "Red") {
        container.addEventListener('mouseover', event => event.target.style.backgroundColor = red);
    } else if (this.textContent === "Eraser") {
        container.addEventListener('mouseover', event => event.target.style.backgroundColor = white);
    } else if (this.textContent === "Black") {
        container.addEventListener('mouseover', event => event.target.style.backgroundColor = black);
    } else if (this.textContent === "Rainbow") {
        container.addEventListener('mouseover', event => event.target.style.backgroundColor = rainbowColor());
    }
}

// create grid function 
function createGrid(gridTile) {
    for (let i = 0; i < gridTile * gridTile; i++) {
        const tile = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${gridTile}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridTile}, 1fr)`;
        tile.classList.add("tiles");
        container.append(tile);
    }
}
createGrid(10);

// user grid size input

function chooseGrid() {
    gridTile = prompt("Choose a grid size up to 100!");
    if (gridTile === null || gridTile === "") {
        return;
    } else if (gridTile  > 100) {
        alert("Too high! Pick 100 or lower!")
    } else if (gridTile <= 100) {
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(gridTile);
    } 
} 

// button eventlisteners 
selectSizeBtn.addEventListener("click", chooseGrid);

colorButtons.forEach((colorButton) => {
    colorButton.addEventListener("click", pickColor)
})
