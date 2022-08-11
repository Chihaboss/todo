import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import Todolist from './Todolist';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
      <h1>My Todo List</h1>
    </header>
    <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
