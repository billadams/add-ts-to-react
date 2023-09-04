import React from 'react';
import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [title, setTitle] = useState('');

  function addTodo() {
    setTodos([...todos, title]);
  }

  function onTitleChange(value: string) {
    setTitle(value);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <label htmlFor='title'>Title: </label>
        <input
          type='text'
          id='title'
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>
      <Button buttonText='Add New' addTodo={addTodo} />

      <h2>Todos</h2>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
