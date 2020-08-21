import React from 'react'

export default function Todo({ todo, clickHandler }) {
    function deleteTodo() {
        clickHandler(todo.id);
    }

    return(
        <div className="list-item">
            <span>
                { todo.name }   
            </span>
            <span onClick={ deleteTodo } className='delBtn'>
                <img src='assets/trash-can.svg' alt='Erase'></img>
            </span>
        </div>
    )
}