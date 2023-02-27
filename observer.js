const updateDataObserver = createObserver()

updateDataObserver.subscribe("configureDataMount", [mount, setEvents, addCountryData, updateLinkField, updateTextField, updateImageField])
updateDataObserver.subscribe("configureDataUnMount", [unMount])

configureDataObserver.notify("configureDataMount")

function createObserver() {
    const observer = {
        subscribers: {},
    
        subscribe(name, args) {
            if (typeof args === "object") {
                this.subscribers = {
                    ...this.subscribers,
                    [name]: args
                }
            } else {
                this.subscribers = {
                    ...this.subscribers,
                    [name]: args
                }
            }
        },
    
        unsubscribe(fn) {
            this.subscribers = this.subscribers.filter(func => func !== fn)
        },
    
        notify(name, data) {
            console.log(name, this.subscribers);
            typeof this.subscribers[name] === "object" ? this.subscribers[name].forEach(fn => fn(data)) : this.subscribers[name](data)
        }
    }

    return observer
}

export { createObserver }
