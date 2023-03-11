const gameboard = document.querySelector("#gameboard")
const info = document.querySelector("#info")

const startCells = [
    "", "", "",
    "", "", "",
    "", "", "",
]

let go = "circle"

info.textContent = "Circle goes first."


function createBoard() {
    startCells.forEach((_item, i) => {
        const cell = document.createElement("div")
        cell.classList.add("square")
        cell.id = i + 1
        cell.addEventListener('click', addGo)
        gameboard.append(cell)
    })
}

createBoard()


function addGo(event) {
    console.log(event.target)

    const goDisplay = document.createElement("div")
    goDisplay.classList.add(go)
    event.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"

    info.textContent = go === "circle" ? "Circle step." : "Cross step."

    event.target.removeEventListener('click', addGo)

    checkScore()
}

function checkScore() {
    const squares = document.querySelectorAll('.square')

    const winningCombos = [
        [1,2,3], [4,5,6], [7,8,9],
        [1,4,7], [2,5,8], [3,6,9],
        [1,5,9], [3,5,7],
    ]

    winningCombos.forEach(arr => {
        const circleWind = arr.every(cell => squares[cell - 1].firstChild?.classList.contains('circle'))

        if (circleWind) {
            info.textContent = "Circle wins."
            squares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }

        const crossWind = arr.every(cell => squares[cell - 1].firstChild?.classList.contains('cross'))

        if (crossWind) {
            info.textContent = "Cross wins."
            squares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
    })

}