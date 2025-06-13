import React from 'react';

function TodoList({ todos, toggleComplete, handleDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.text}
          </label>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
