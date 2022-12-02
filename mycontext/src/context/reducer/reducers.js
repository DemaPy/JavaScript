




export const reducer = (state, action) => {
    switch (action.type) {
        case 'COMPLETED':
            return state.filter(todo => todo.id !== action.payload)
        case 'ADD__TASK':
            return state = [...state, action.payload]
        default:
            return state;
    }

}