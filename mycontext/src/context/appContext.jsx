import { createContext } from "react";




export const TodosContext = createContext()

export const initialState = [
    {
        id: Math.random(),
        title: 'Todo 1',
        content: 'Go to magazine',
        complete: false
    },
    {
        id: Math.random(),
        title: 'Todo 2',
        content: 'Go to magazine',
        complete: false
    },
    {
        id: Math.random(),
        title: 'Todo 3',
        content: 'Go to magazine',
        complete: false
    },
    {
        id: Math.random(),
        title: 'Todo 4',
        content: 'Go to magazine',
        complete: false
    }
]