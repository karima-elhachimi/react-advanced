import { combineReducers, createStore } from 'redux';
import { todoReducer } from '../reducers/todo.reduce';

export const rootReduced = combineReducers({
  todos: todoReducer,
});

export const store = createStore(rootReduced);
