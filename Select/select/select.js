const getTemplate = (data = [], placeholder, selectedID) => {
    let text = placeholder ?? 'Default placeholder'

    const items = data.map(item => {
        if (item.id === selectedID) {
            text = item.value
        }
        return `<li data-type="item" data-id="${item.id}" class="select__item">${item.value}</li>`
    })

    return `
    <div class="select__input" data-type="input">
        <span data-value="value">${text}</span>
    </div>
    <div class="select__dropdown">
        <ul class="select__list">
            ${items.join('')}
        </ul>
    </div>
    `
}


export class Select {
    constructor(selector, options) {
        this.el = document.querySelector(selector)
        this.options = options
        this.selectedID = options.selectedId

        this.#render()
        this.#setup()
    }

    #render() {
        const { placeholder, data } = this.options
        this.el.classList.add('select')
        this.el.innerHTML = getTemplate(data, placeholder, this.selectedID)
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.el.addEventListener('click', this.clickHandler)
        this.value = this.el.querySelector('[data-value="value"]')
    }

    clickHandler(e) {
        const {type} = e.target.dataset
        if (type === 'input') {
            this.toggle()
        } else if (type === 'item') {
            const id = e.target.dataset.id
            this.select(id)
        }
    }

    get isOpen() {
        return this.el.classList.contains('open')
    }

    get current() {
        return this.options.data.find(item => item.id === this.selectedID)
    }

    select(id) {
        this.selectedID = id
        this.value.textContent = this.current.value
        this.el.querySelectorAll("[data-type='item']")
            .forEach(element => {
                element.classList.remove('selected')
            });
        this.el.querySelector(`[data-id="${id}"]`).classList.add('selected')
        this.close()
    }

    toggle() {
        this.isOpen ? this.close() : this.open()
    }

    open() {
        this.el.classList.add('open')
    }

    close() {
        this.el.classList.remove('open')
    }

    destroy() {
        this.el.removeEventListener('click', this.clickHendler)
        this.el.innerHTML = ''
    }
}