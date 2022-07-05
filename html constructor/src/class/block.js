import {row, col, css} from '../utils'




export class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Method toHTML need to be realized!')
    }
}




export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {tag='h1',styles} = this.options
        let html = row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
        return html
    }
}




export class Text extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const styles = stylecss(this.options)
        let html = row(col(`<p>${this.value}</p>`),css(styles))
        return html
    }
}




export class Columns extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const styles = stylecss(this.options)
        const html = this.value.map(i => col(i))
        return row(html.join(''), css(styles))
    }
}




export class Img extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const styles = stylecss(this.options)
        return row(`<img src="${this.value}"/>`,css(styles))
    }
}

function stylecss(s) {
    const {styles} = s
    return styles
}