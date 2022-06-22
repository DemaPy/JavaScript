const text = document.querySelector('.text')
const strText = text.textContent.split("")
text.textContent = ""


for (let index = 0; index < strText.length; index++) {
    text.innerHTML += `<span>${strText[index]}</span>`
}

let char = 0 
let timer = setInterval(onTick, 50)

function onTick () {
    const span = text.querySelectorAll('span')[char]
    span.classList.add('fade')
    char++
    if (char === strText.length) {
        complete()
        return
    }
}


function complete() {
    clearInterval(timer)
    timer = null
}
