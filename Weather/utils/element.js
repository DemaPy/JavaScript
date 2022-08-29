export const element = {
    getElement(e) {
        return document.querySelector(e)
    },
    getElements(e) {
        return document.querySelectorAll(e)
    },
    setClick(e, cb) {
        return e.addEventListener('click', cb)
    }
    
} 