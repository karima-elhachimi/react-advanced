import { connect } from 'react-redux';
import TodoList from '../modules/todos/todolist';

const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

export function todoReducer(initalState = {}, action) {
  switch (action && action.type) {
    case ADD_TODO: {
      const { payload: newTodo } = action;
      return {
        ...initalState,
        [newTodo.id]: newTodo,
      };
    }
    case COMPLETE_TODO: {
      const { payload } = action;

      return {
        ...initalState,
        [payload.id]: { ...payload, completed: true },
      };
    }
    default:
      return initalState;
  }
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function completeTodo(todo) {
  return {
    type: COMPLETE_TODO,
    payload: todo,
  };
}
