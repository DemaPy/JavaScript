export class Table {
    constructor() {
        this.el = document.querySelector('#table')
        // this.init()
    }

    // init () {
    //     this.el.insertAdjacentHTML('beforeend' ,this.template)
    // }

    render(template) {
        this.el.insertAdjacentHTML('beforeend' ,template)
    }
}