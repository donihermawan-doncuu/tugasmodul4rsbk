import React, { useReducer, useState } from 'react'
import "./Index.css";
import Todo from './Todo.js'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:

            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            console.log('string masuk')
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}


export default function Index() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }


    return (
        <>
            <div className="Main">
            <p className="Text">Kelompok 27</p>
                <form type="tab" onSubmit={handleSubmit}>
                <input placeholder="Masukkan daftar list" type="Text" value={name} onChange={e => setName(e.target.value)} />
                </form>
                {todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                })}

            </div>
        </>
    )
}