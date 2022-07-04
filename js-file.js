// ITEMS
const drawingArea = document.querySelector('.drawing-area')
let grid = 'auto'

const slider = document.querySelector('.slider')
const sliderText = document.querySelector('.size')
const clrButton = document.querySelector('.clrButton')
const colorPicker = document.querySelector('.color-picker')

createDrawingArea(16)

// EVENT HANDLERS
colorPicker.addEventListener('change', () => {
    triggerDrawing(colorPicker.value)
})

slider.oninput = function() {
    console.log(slider.value)
    createDrawingArea(slider.value)
    sliderText.innerHTML = slider.value + ' x ' + slider.value
} 

clrButton.onclick = function() {
    createDrawingArea(slider.value)
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// FUNCTIONS
function createDrawingArea (gridSize) {
    drawingArea.removeChild(drawingArea.firstChild)

    const canvas = document.createElement('div')
    canvas.style.display = 'grid'

    canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for(let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div')
        div.classList.add('pixel')
        div.addEventListener('mouseover', penColor)
        div.addEventListener('mousedown', penColor)
        canvas.appendChild(div)
    }

    drawingArea.appendChild(canvas)
}

function penColor(e) {
    if(e.type === 'mouseover' && !mouseDown) return

    e.target.style.backgroundColor = colorPicker.value
}