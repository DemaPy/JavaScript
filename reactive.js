let runFn = null

const obj = reactive({
    a: 0,
    b: 2,
})

autoRun(() => {
    console.log("obj", obj.a)
})

autoRun(() => {
    console.log("obj", obj.b)
})


function reactive(obj) {
    const array = Object.entries(obj)

    return array.reduce((acc, [key, value]) => {
        let val = value
        const deps = new Set()

        Object.defineProperty(acc, key, {
            get() {
                if (runFn && !deps.has(runFn)) {
                    return deps.add(runFn)
                }
                return val
            },
            set(newValue) {
                if (hasChanged(val, newValue)) {
                    val = newValue
                    deps.forEach(f => f())
                }
            },
            enumerable: true
        })
        return acc
    }, {}) 
}

function hasChanged(val1, val2) {
    if (val1 !== val2) {
        return true
    }
}

function autoRun(fn) {
    runFn = fn
    fn()
    runFn = null
}
