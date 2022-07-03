// ITEMS
const drawingArea = document.querySelector('.drawing-area')
let grid = 'auto'

const slider = document.querySelector('.slider')
const sliderText = document.querySelector('.size')

createDrawingArea(16)

slider.oninput = function() {
    console.log(slider.value)
    createDrawingArea(slider.value)
    sliderText.innerHTML = slider.value + ' x ' + slider.value
  } 

function createDrawingArea (gridSize) {
    drawingArea.removeChild(drawingArea.firstChild)

    const canvas = document.createElement('div')
    canvas.style.display = 'grid'

    canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for(let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div')
        div.classList.add('pixel')
        canvas.appendChild(div)
    }

    drawingArea.appendChild(canvas)

    const pixel = document.querySelectorAll('.pixel')

    for (let i = 0; i < pixel.length; i++) {
        pixel[i].addEventListener('mouseover', () => {
            pixel[i].style.backgroundColor = 'black'
        })
    }
}