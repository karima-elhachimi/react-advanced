import { combineReducers } from 'redux';
import { todoReducer } from '../reducers/todo.reduce';
export const rootReduced = combineReducers({
  todos: todoReducer,
});
