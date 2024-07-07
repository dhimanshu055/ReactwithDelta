import React, { useState } from 'react';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = () => {
    if (title && description) {
      const newTodo = {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title,
        description,
      };
      const newTodos = [...todos];
      newTodos.push(newTodo);
      setTodos(newTodos);
      setTitle('');
      setDescription('');
    }
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React To-Do List</h1>
      </header>
      <div>
        <h2>To-Do List</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTodo}>Add To-Do</button>
        <div>
          {todos.map(todo => (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDo;
