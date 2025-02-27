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