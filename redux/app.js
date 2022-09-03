
const ids = ['counter', 'add', 'sub', 'async']
let elements = {}
ids.forEach(item => elements = {
    ...elements,
    [item]: document.querySelector(`#${item}`)
});
const {counter, add, sub, async} = elements


const store = createStore(reducer, 0)
function createStore(reducer, initState) {
    let state = reducer(initState, {type: 'INIT'})
    const subscribers = []
    return {
        dispatch(action) {
            state = reducer(state, action)
            subscribers.forEach(item => item())
        },
        subscribe(cb) {
            subscribers.push(cb)
        },
        getState() {
            return state
        }
    }
}

function reducer(state, action) {
    if (action.type === add.id.toUpperCase()) {
        return state+1
    } else if (action.type === sub.id.toUpperCase()) {
        return state-1
    }
    return state
}

store.subscribe(()=> counter.textContent = store.getState())
store.dispatch({type: 'INIT_APP'})

addEvent([add,sub])
function addEvent(item, event='click') {
    Array.isArray(item) ? 
        item.map(item => item.addEventListener(event, ()=> store.dispatch({type: item.id.toUpperCase()}))) :
            item.addEventListener(event, ()=> store.dispatch({type: item.id.toUpperCase()}))
}

async.addEventListener('click', ()=> {
    store.dispatch({type: add.id.toUpperCase()})
})

// function render() {
//     return counter.textContent = state.toString()
// }

// function clickHandler({type}) {
//     switch(type) {
//         case 'add':
//             state++
//             render()
//             break
//         case 'sub':
//             state--
//             render()
//             break
//         default:
//             console.log(`We don\'t have yet that type ${type}`)
//     }
// }

// render()