import todoReducer, { addTodo } from './todo.reduce';
describe('todo reducer ', () => {
  test('verify that our todoReducer has an initialState of {}', () => {
    const initalState = todoReducer();

    expect(initalState).toStrictEqual({});
  });

  test('verify that our reducer spreads the existing state', () => {
    const existingState = { 1: 'test' };
    const spreadState = todoReducer(existingState, null);
    expect(existingState).toStrictEqual(spreadState);
  });

  test('verify that our reducer normalizes the todo under its id', () => {
    const todo = 'do this or that';
    const newState = todoReducer({}, addTodo(todo));
    const normalisedTodo = newState[1];

    expect(normalisedTodo).toStrictEqual(todo);
  });
});
