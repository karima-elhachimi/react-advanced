import todoReducer, { addTodo } from './todo.reduce';
const todotype = require('./todo.type');
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
    /** @type {todotype } */
    const todo = {
      id: 1,
      name: 'i am a name',
      completed: false,
    };
    const newState = todoReducer({}, addTodo(todo));
    const normalisedTodo = newState[todo.id];

    expect(normalisedTodo).toStrictEqual(todo);
  });
});
