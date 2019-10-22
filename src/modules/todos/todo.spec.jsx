import React from 'react';
import { renderWithRedux, renderWithRouter } from '../../../test/render-utils';
import { fireEvent } from '@testing-library/dom';
import TodoList from './todolist';

describe('Ex 2: todos component', () => {
  function renderComponent() {
    const result = renderWithRouter(<TodoList />);
    return {
      ...result,
      getHeader: result.getByRole.bind(null, 'todo-header'),
    };
  }
  test('1: todo link is in header', () => {
    const { history, getHeader } = renderComponent();
    const header = getHeader();
    fireEvent.click(header);
    expect(history.location.pathname).toBe('/todos');
  });
  test('2: verify the items remaining footer', () => {});
  test('3: verify the list of remaining todos, clicking one, or checking one completes the todo', () => {});
  test('4: verify the user can add a new todo by entering the name in the input', () => {});
});
