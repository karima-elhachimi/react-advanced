import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todo.reduce';

function TodoList() {
  const remainingTodos = useSelector(state => Object.values(state.todos).filter(todo => !todo.complete));
  const handleChange = e => {
    if (e.target.value) {
      const todo = {
        id: Date.now(),
        name: e.target.value,
        completed: false,
      };
    }
  };
  return (
    <div className="container">
      <div role="todo-header">Todos</div>
      <form onSubmit={() => {}}>
        <label htmlFor="todo-input">Add new todo:</label>
        <input name="todo-input" placeholder="enter new todo" role="todo-input" onChange={e => handleChange(e)} />
      </form>
      <ul>
        {remainingTodos.map(todo => (
          <li key={`todo-${todo.id}`} role="todo-item">
            <input type="checkbox" onChange={() => {}} /> <span>{todo.name}</span>
          </li>
        ))}
      </ul>
      <div role="todo-footer">{remainingTodos.length} remaining todos.</div>
    </div>
  );
}

export const mapStateToProps = state => {
  return {
    todos: Object.values(state.todos),
  };
};

export const mapDispatchToProps = dispatch => ({
  add: todo => dispatch(addTodo(todo)),
  complete: todo => dispatch(completeTodo(todo)),
});

export default TodoList;
