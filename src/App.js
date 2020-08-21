import React, { useState, useRef, useEffect } from 'react';
import List from './todoList'
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const LOCALSTORAGE_KEY = 'listItems';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if(storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(e) {
    e.preventDefault();

    var todo = todoNameRef.current.value;
    todoNameRef.current.focus();

    if(
      todo === undefined ||
      todo === null ||
      todo.replace(/ /g, "") === ""
    ) return;

    setTodos(prev => {
      return [...prev, { id: uuidv4(), name: todo, complete: false }];
    })

    todoNameRef.current.value = '';
  }

  function deleteItem(id) {
    const newTodos = todos.filter(todo => todo.id !== id);

    setTodos(newTodos);

  }

  function clearList() {
    var delListCnfrm = window.confirm("Are you sure you want to delete your entire todo list?")
    if(delListCnfrm) {
      setTodos([]);
    }
  }

  return (
    <div className="list">

      <h1>Todo List</h1>

      <form onSubmit={ addTodo }>
        <input ref={todoNameRef} type="text"></input>
      </form>

      <button onClick={ addTodo }>Add</button>
      <button onClick={ clearList }>Clear</button>
      <div className='left'>{ todos.length } todos left</div>

      <div className="list-items">
        <List todos={ todos } clickHandler={ deleteItem } />
      </div>
    </div>
  );
}

export default App;