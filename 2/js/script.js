const button = document.querySelector('.btn-refresh')
const cardColor = document.querySelector('.color-card')
const container = document.querySelector('.container')
const body = document.querySelector('body')
const hexColorEl = document.querySelector('.hex-color')

const changeColor = () => {
    let hexColor = Math.floor(Math.random() * 0xffffff).toString(16)
    hexColor = `#${hexColor.padStart(6,'0')}`
    cardColor.style.backgroundColor = hexColor
    container.style.backgroundColor = hexColor
    body.style.backgroundColor = hexColor
    hexColorEl.textContent = hexColor
    hexColorEl.addEventListener('click',()=> copyHex(hexColor))
}

const copyHex = (hex) => {
    navigator.clipboard.writeText(hex)
    hexColorEl.textContent = 'Copied'
    setTimeout(()=> hexColorEl.textContent = hex ,1000)
}

button.addEventListener('click',changeColor)