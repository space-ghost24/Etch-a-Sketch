// Select elements
const container = document.querySelector('.container');
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

        // Track the cell color and interaction count
        let cellColor = 'rgb(255, 255, 255)';  // Default color white

        // Ensure default color is white until user interacts
        cell.style.backgroundColor = cellColor;

        cell.addEventListener('mouseover', () => {
            if (eraserMode) {
                cell.style.backgroundColor = 'rgb(255,255,255)';
                cellColor = 'rgb(255, 255, 255)';
            } else if (randomColor) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                cellColor = `rgb(${r}, ${g}, ${b})`;
                cell.style.backgroundColor = cellColor;
            } else if (darkenMode) {
                // Apply progressive darkening effect with interaction count
                cell.style.backgroundColor = darkenColor(cellColor);
                cellColor = cell.style.backgroundColor;  // Update cell's color after darkening
            } else {
                // Default behavior with currentColor
                cell.style.backgroundColor = currentColor;
            }
        });
        container.appendChild(cell);
    }
}

// Toggle Eraser
eraser.addEventListener('click', () => {
    eraserMode = !eraserMode;
    if (eraserMode) {
        eraser.textContent = 'Eraser: ON';
        eraser.style.boxShadow = '0 0 10px 2px rgb(90, 90, 90)';
    } else {
        eraser.textContent = 'Eraser: OFF';
        eraser.style.boxShadow = '';
    }
});

// Clear all cells
clear.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'rgb(255,255,255)';
    });
});

// Toggle randomColor
random.addEventListener('click', () => {
    randomColor = !randomColor;
    if (randomColor){
        random.textContent = 'Random color: ON';
        random.style.boxShadow = '0 0 10px 2px rgb(90, 90, 90)';
    } else {
        random.textContent = 'Random color: OFF';
        random.style.boxShadow = '';
    }
});

// Toggle Progressive Darkening
darken.addEventListener('click', () => {
    darkenMode = !darkenMode;
    if (darkenMode) {
        darken.textContent = 'Darken: ON';
        darken.style.boxShadow = '0 0 10px 2px rgb(90, 90, 90)';
    } else {
        darken.textContent = 'Darken: OFF';
        darken.style.boxShadow = '';
    }
})

//Darken color by 10%
function darkenColor(color) {
    let [r, g, b] = color.match(/\d+/g).map(Number);
    let darkenAmount = Math.floor(255 * 0.1); // Darken by 10% per interaction

// Darken color by a fixed amount each time
    r = Math.max(0, r - darkenAmount);
    g = Math.max(0, g - darkenAmount);
    b = Math.max(0, b - darkenAmount);

    return `rgb(${r}, ${g}, ${b})`;
}

// Handle color picker
colorPick.addEventListener('click', () => {
    colorInput.click();// Click to open color picker
});

// Listen for color changes
colorInput.addEventListener('input', (e) => {
    currentColor = e.target.value;// Gets color picked by user
});

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