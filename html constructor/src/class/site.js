export class Site {
    constructor(selector) {
        this.element = document.querySelector(selector)
    }

    render(model) {
        model.forEach(block => {
            this.element.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }
}