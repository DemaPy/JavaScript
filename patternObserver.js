const body = document.querySelector('body')

// Pattern Observer

class Observer {
    constructor() {
        this.observers = []
    }

    subscribe(func) {
        this.observers.push(func)
    }

    unsubscribe(func) {
        this.observers = this.observers.filter(observer => observer !== func)
    }

    notify(data) {
        this.observers.forEach(func => func(data))
    }

    getSubscriberal() {
        this.observers.forEach(func => console.log(func))
    }
}

let observer = new Observer()

function logger(data) {
    console.log(`At ${Date.now()} ${data}`);
}

observer.subscribe(logger)

body.addEventListener('click', (e) => {
    switch (e.target.attributes.id.value) {
        case 'dec':
            result.textContent = Number(result.textContent) - 1
            observer.notify("User clicked to decrement button.")
            break;
        case 'inc':
            result.textContent = Number(result.textContent) + 1
            observer.notify("User clicked to increment button.")
            break;
        default:
            break;
    }
})

