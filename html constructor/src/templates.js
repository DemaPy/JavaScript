import {row, col, css} from './utils'

function stylecss(s) {
    const {styles} = s
    return styles
}

function title(block) {
    const {tag='h1',styles} = block.options
    let html = row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
    return html
}

function text(block) {
    const styles = stylecss(block.options)
    let html = row(col(`<p>${block.value}</p>`),css(styles))
    return html
}

function columns(block) {
    const styles = stylecss(block.options)
    const html = block.value.map(i => col(i))
    return row(html.join(''), css(styles))
}

function img(block) {
    const styles = stylecss(block.options)
    return row(`<img src="${block.value}"/>`,css(styles))
}

export const templates = {
    title: title,
    img: img,
    columns: columns,
    text: text
}