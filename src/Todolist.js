import React from 'react'
import Todo from './Todo'

const Todolist = () => {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      <Todo />
    </div>
  )
}

export default Todolist