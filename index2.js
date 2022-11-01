const container = document.querySelector('.main-container');
const grid = document.createElement('div');
const btn = document.createElement('button');
let cssClass = ['blue', 'black', 'red', 'green', 'purple'];
let squareSize = 8;
var maxLimit = 100;
let randomNumber;
container.appendChild(grid);
grid.classList.add('grid');

container.prepend(btn);
btn.textContent = 'Change grid size !';


createGrid(squareSize);





function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    return div;
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid.appendChild(createDiv(grid.clientWidth / gridSize));

        }
    }
}

function generateInteger(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



grid.addEventListener('click', (e) => {
    if (e.target.matches('.box')) {
        randomNumber = generateInteger(cssClass.length);
        e.target.classList.add(cssClass[randomNumber]);
    }
}, true)

btn.addEventListener('click', () => {

    do {

        var userSquare = prompt('Enter the number of square you want ! (Between 1 and 100)');

    } while (isNaN(userSquare) || userSquare >= maxLimit || userSquare == null);
    $('.box').remove();
    createGrid(userSquare);
}
)
