import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';
import Todolist from './Todolist';

function App() {
// state stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtereTodos, setFiltereTodos] = useState([]);

// effect

useEffect(() => {
  filterHnadler()
}, [todos])


  //fUNCTION

const filterHnadler = () => {
  switch(status){
    case 'completed' :
      setFiltereTodos(todos.filter(todo => todo.completed = true));
      break;
     case 'incompleted' : 
     setFiltereTodos(todos.filter(todo => todo.completed = false));
      break;
      default :
      setFiltereTodos(todos)
  }
}

  return (
    <div className="App">
      <header>
      <h1>My Todo List</h1>
    </header>
    <Form inputText={inputText} 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText} 
    status={status} 
    setStatus={setStatus} />
    <Todolist todos={todos} setTodos={setTodos} filtereTodos={filtereTodos}/>
    </div>
  );
}

export default App;
