import React from 'react'
import { ACTIONS } from './Index.js'

export default function Todo( {todo, dispatch} ) {
    return (
        <table>
        <div>
            <tr>
                <th>
            <span style={{color: todo.complete ? '#707070' : '#ffffff'}}>
            {todo.name}   
            </span>
</th>
<th>
            <button onClick={() => dispatch ({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}
            > Checklist </button> </th>
            <th>
            <button onClick={() => dispatch ({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}> Delete </button>
            </th>
            </tr>
        </div>
        </table>
    )
}