const showInfo = document.getElementById('show')
const counter = document.getElementById('counter')

let card = {
    'item1': 0,
}

document.onclick = e => {
    if(e.target.classList.contains('add')) {
        addFunc(e.target.dataset.id)
        hideH1()
    }

    if(e.target.classList.contains('rem')) {
        remFunc(e.target.dataset.id)
    }
}

const addFunc = (itemId) => {
    counter.innerHTML = `Вы заказали фотосессий: ${card[itemId]++} шт.`
}

const remFunc = (itemId) => {
    if (card.item1 - 1 < 0) {
        showH1()
        showInfo.innerHTML = 'Количество фотосессий не может быть меньше 1'
        return
    }
    counter.innerHTML = `Вы заказали фотосессий: ${card[itemId]--} шт.`
}

const showH1 = () => {
    showInfo.style.opacity = "1";
}

const hideH1 = () => {
    showInfo.style.opacity = "0";
}
