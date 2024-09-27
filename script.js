const hexButton = document.querySelector('.hex-button')
const hexColorValue = document.querySelector('.hex-color-value')

const hexGenerator = document.querySelector('.Hex-generator')

hexButton.addEventListener('click', () => {
    let charSet = '0123456789ABCDEF'
    let hexColorOutput = ''
    for (let i = 0, charSetLength = charSet.length; i < 6; ++i) {
        hexColorOutput += charSet.charAt(Math.floor(Math.random() * charSetLength))
    }

    hexColorValue.textContent = `#${hexColorOutput}`

    hexGenerator.style.backgroundColor = `#${hexColorOutput}`
    hexButton.style.color = `#${hexColorOutput}`

})

const rgbBtn = document.querySelector('.rgb-button')
const rgbRed = document.querySelector('#red')
const rgbGreen = document.querySelector('#green')
const rgbBlue = document.querySelector('#blue')
let rgbValue = document.querySelector('.rgb-color-value')
const rgbContainer = document.querySelector('.rgb-generator')

rgbBtn.addEventListener('click', () => {
    let redValue = rgbRed.value
    let greenValue = rgbGreen.value
    let blueValue = rgbBlue.value

    rgbValue.textContent = `rgb(${redValue},${greenValue},${blueValue})`

    rgbContainer.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`

    rgbBtn.style.color = `rgb(${redValue},${greenValue},${blueValue})`
})

const hexCopyBtn = document.querySelector('.hex-copy')
hexButton.addEventListener('click', () => {
    navigator.clipboard.writeText(hexColorValue.textContent)
})

const rgbCopyBtn = document.querySelector('.rgb-copy')
rgbCopyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(rgbValue.textContent)
})
