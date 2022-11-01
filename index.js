const container = document.querySelector('.main-container');
let rows = document.getElementsByClassName('gridRow');
let columns = document.getElementsByClassName('gridColumn');
let btnContainer = document.createElement('div');
let btn = document.createElement('button');


btnContainer.prepend(btn);
btn.classList.add('')







generateGrid(16);
function generateGrid(numberofCell) {
    makeRow(numberofCell);
    makeColumn(numberofCell);
}



function makeRow(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        var row = document.createElement("div");
        container.appendChild(row);
        row.className = "gridRow";


    }
}

function makeColumn(cellNum) {
    for (let r = 0; r < rows.length; r++) {
        for (let j = 0; j < cellNum; j++) {
            var column = document.createElement("div");
            rows[j].appendChild(column).className = "gridColumn";

        }
    }
}


