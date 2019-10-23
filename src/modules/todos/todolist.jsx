import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodo } from '../../reducers/todo.reduce';

function TodoList({ todos }) {
  return (
    <div className="container">
      <div role="todo-header">Todos</div>
      <form>
        <label htmlFor="todo-input">Add new todo:</label>
        <input name="todo-input" placeholder="enter new todo" role="todo-input" />
      </form>
      <div role="todo-footer">{todos.length} remaining todos.</div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
