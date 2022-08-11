import React from 'react'
import Todo from './Todo'

const Todolist = ({todos, setTodos, filtereTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtereTodos.map(todo =>(
            <Todo 
                setTodos={setTodos}
                todos={todos}
                todo={todo}
                text={todo.text} 
                key={todo.id}/>
        ))}
      </ul>
      
    </div>
  )
}

export default Todolist