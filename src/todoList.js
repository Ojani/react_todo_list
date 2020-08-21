import React from 'react'
import Todo from './todo'

export default function ToDoList({ todos, clickHandler }) { 
    return (
        todos.map(todo => {
            return <Todo clickHandler={clickHandler} key={todo.id} todo={todo} />
        })
    )
}