// ITEMS
const drawingArea = document.querySelector('.drawing-area')
let gridSize = 50;
let grid = 'auto'

drawingArea.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
drawingArea.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

for(let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div')
    div.classList.add('pixel')
    drawingArea.appendChild(div)
}

console.log(grid)

const pixel = document.querySelectorAll('.pixel')

for (let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener('mouseover', () => {
        pixel[i].style.backgroundColor = 'black'
    })
}