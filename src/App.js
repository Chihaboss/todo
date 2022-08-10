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
    <Form todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    <Todolist />
    </div>
  );
}

export default App;
