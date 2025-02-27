// Select elements
const container = document.querySelector('.container');
const gridWrapper = document.querySelector('.gridWrapper');
const newGrid = document.querySelector('.gridBtn');
const random = document.querySelector('.randomColor');
const colorPick = document.querySelector('.colorPick');
const colorInput = document.querySelector('.colorInput');
const darken = document.querySelector('.darken');
const eraser = document.querySelector('.eraserBtn')
const clear = document.querySelector('.clear');
let randomColor = false;
let darkenMode = false;
let eraserMode = false;
let currentColor = 'rgb(155, 155, 155)';

// Create grid
function createGrid(size) {
    container.innerHTML = '';  // Clear previous or default grid
    const cellSize = 600 / size;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;

        // Track the cell color
        let cellColor = 'rgb(255, 255, 255)';  // Default color white
        
        cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = currentColor;
            });
        container.appendChild(cell);
    }
}

// Generate new grid
newGrid.addEventListener('click', () => {
    let size = prompt('Enter a grid size between 1 and 100: ');
    size = parseInt(size);
    if (isNaN(size) || size < 1 || size > 100){
        alert('Incorrect value entered! Enter a number between 1 and 100');
        return;
    } else {
        createGrid(size);
    }
});

createGrid(16); // Default Grid