import React from 'react';
import '@testing-library/jest-dom';
import { renderWithRedux } from '../../../test/render-utils';

import { todoReducer } from '../../reducers/todo.reduce';
import TodoList from './todolist';
import { createStore } from 'redux';

describe('Ex 2: todos component', () => {
  const todos = [{ id: 1, name: 'this is a name' }, { id: 2, name: 'this is a name 2' }];
  const initialState = {
    [todos[0].id]: todos[0],
    [todos[1].id]: todos[1],
  };
  const stateAndStore = {
    initialState,
    store: createStore(todoReducer, initialState),
  };

  function renderComponent() {
    const result = renderWithRedux(<TodoList />, { ...stateAndStore });

    return {
      ...result,
      getHeader: result.getByRole.bind(null, 'todo-header'),
    };
  }

  test('1: verify header', () => {
    const { getHeader, debug } = renderComponent();
    debug();
    const header = getHeader();
    expect(header).toHaveTextContent(/Todos/i);
  });

  test('2: verify the items remaining footer', () => {
    const { debug } = renderComponent();
    debug();
  });
  test('3: verify the list of remaining todos, clicking one, or checking one completes the todo', () => {});
  test('4: verify the user can add a new todo by entering the name in the input', () => {});
});
