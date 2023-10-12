const txt = document.querySelector('.txt')

const changeColor = () => {
    let hex = Math.floor(Math.random() * 0xffffff).toString(16)
    hex = `#${hex.padStart(6,'0')}`
    txt.style.color = hex
    setTimeout(changeColor,1000)
}
changeColor()