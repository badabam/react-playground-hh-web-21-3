import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

export default () => {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Add todo:
          <input name="todo" type="text" />
        </label>
        <button>Add</button>
      </form>
      <ul>
        {todos.map(({ text, isDone, id }) => (
          <li onClick={() => toggleIsDone(id)} key={id}>
            {text} {isDone && '✅'}
          </li>
        ))}
      </ul>
    </div>
  )

  function toggleIsDone(id) {
    const index = todos.findIndex(todo => todo.id === id)
    const todo = todos[index]

    setTodos([
      ...todos.slice(0, index), // everything before the index
      { ...todo, isDone: !todo.isDone },
      ...todos.slice(index + 1), // everything after the index
    ])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.todo
    const newTodo = { text: input.value, isDone: false, id: uuidv4() }
    // create a new a new array with all the values of the original array `todos` and our new todo
    setTodos([...todos, newTodo]) // spread operator
    form.reset()
    input.focus()
  }
}
