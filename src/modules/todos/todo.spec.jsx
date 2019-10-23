import React from 'react';
import '@testing-library/jest-dom';
import { renderWithRedux } from '../../../test/render-utils';

import TodoList from './todolist';
import { createStore } from 'redux';

import { rootReduced } from '../../store/store';
import { fireEvent } from '@testing-library/dom';

describe('Ex 2: todos component', () => {
  const mockTodos = [
    { id: 1, name: 'conquer world' },
    { id: 2, name: 'world dominion' },
    { id: 3, name: 'feed the cat', complete: true },
  ]; //variatie in data voor meerdere cases

  function renderComponent(todos = { ...mockTodos }) {
    console.log('renderComponent');
    const result = renderWithRedux(<TodoList />, { initialState: { todos } });

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
    console.log({ state: store.getState() });
    const footer = getFooter();
    expect(footer).toHaveTextContent(/2 remaining todos./i);
  });

  test('4: input value works', () => {
    const { getInput } = renderComponent();
    const newTodo = 'this is a test todo';
    const input = getInput();
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: newTodo } });
    expect(input.value).toBe(newTodo);
  });

  test('lists todos that are not completed', () => {
    const { getAllByRole } = renderComponent();
    expect(getAllByRole('todo-item').length).toBe(2);
  });
  test('5: clicking one, or checking one completes the todo', () => {
    const { getAllByRole, store } = renderComponent();
    const todos = Object.values(store.getState().todos).filter(todo => !todo.complete);

    const todoListItems = getAllByRole('todo-item');
    expect(todoListItems.length).toBe(todos.length);
    fireEvent.click(todoListItems[0]);
    expect(todoListItems.length).toBe(todos.length - 1);
  });
  test('6: remaining todo changes with adding or completing a todo', () => {});
  test('7: verify the user can add a new todo by entering the name in the input', () => {});
  test('8: adds a new todo by entering its title in the input', () => {});
});
