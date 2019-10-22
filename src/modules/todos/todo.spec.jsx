import React from 'react';
import { Router } from 'react-router-dom';
import { renderWithRedux, renderWithRouter } from '../../../test/render-utils';
import { fireEvent } from '@testing-library/dom';

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

  function renderComponentWithRouter() {
    const result = renderWithRouter(<TodoList data-testid="todos-list" />);

    return {
      ...result,
      getHeader: result.getByRole.bind(null, 'todo-header'),
    };
  }

  function renderComponentWithRedux() {
    const result = renderWithRedux(<TodoList />, { ...stateAndStore });

    return {
      ...result,
    };
  }

  test('2: verify the items remaining footer', () => {
    const { debug } = renderComponentWithRedux();
    debug();
  });
  test('3: verify the list of remaining todos, clicking one, or checking one completes the todo', () => {});
  test('4: verify the user can add a new todo by entering the name in the input', () => {});
});
