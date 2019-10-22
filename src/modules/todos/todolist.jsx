import React from 'react';
import { Link } from 'react-router-dom';

function TodoList() {
  return (
    <div>
      <Link to="/todos" role="todo-header">
        Todos
      </Link>
    </div>
  );
}

export default TodoList;
