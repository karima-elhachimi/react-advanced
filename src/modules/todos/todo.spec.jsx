import React from 'react';
import '@testing-library/jest-dom';
import { renderWithRedux } from '../../../test/render-utils';

import TodoList from './todolist';
import { createStore } from 'redux';

import { rootReduced } from '../../store/store';
import { fireEvent } from '@testing-library/dom';

describe('Ex 2: todos component', () => {
  const mockTodos = [{ id: 1, name: 'conquer world' }, { id: 2, name: 'world dominion' }];
  const initialState = {
    todos: {
      [mockTodos[0].id]: mockTodos[0],
      [mockTodos[1].id]: mockTodos[1],
    },
  };
  const stateAndStore = {
    initialState,
    store: createStore(rootReduced, initialState),
  };

  function renderComponent() {
    const result = renderWithRedux(<TodoList />, { ...stateAndStore });

    return {
      ...result,
      getHeader: result.getByRole.bind(null, 'todo-header'),
      getFooter: result.getByRole.bind(null, 'todo-footer'),
      getInput: result.getByRole.bind(null, 'todo-input'),
    };
  }

  test('1: verify header', () => {
    const { getHeader, debug } = renderComponent();
    debug();
    const header = getHeader();
    expect(header).toHaveTextContent(/Todos/i);
  });

  test('2: verify footer', () => {
    const { getFooter } = renderComponent();
    const footer = getFooter();

    expect(footer).toBeInTheDocument();
  });
  test('3: todo count is in footer', () => {
    const { getFooter, store } = renderComponent();
    const footer = getFooter();
    expect(footer).toHaveTextContent(/2 remaining todos./i);
  });
  test('4: input works', () => {
    const { getInput, store } = renderComponent();
    const newTodo = 'this is a test todo';
    expect(getInput.value).toBe('');
    fireEvent.change(getInput, { target: { value: newTodo } });
    fireEvent.keyPress('enter');
    expect(getInput.value).toBe(newTodo);
  });
  test('5: clicking one, or checking one completes the todo', () => {});
  test('6: remaining todo changes with adding or completing a todo', () => {});
  test('7: verify the user can add a new todo by entering the name in the input', () => {});
  test('8: adds a new todo by entering its title in the input', () => {});
});
