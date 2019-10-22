import todoReducer, { addTodo, completeTodo } from './todo.reduce';
const todotype = require('./todo.type');

/** @type {todotype } */
const todo1 = {
  id: 1,
  name: 'i am a name',
  completed: false,
};
const todo2 = {
  id: 2,
  name: 'i am a name 2',
  completed: false,
};

describe('todo reducer add functionality ', () => {
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
    const newState = todoReducer({}, addTodo(todo1));
    const normalisedTodo = newState[todo1.id];
    expect(normalisedTodo).toStrictEqual(todo1);
  });
});
describe('todo reducer complete functionality ', () => {
  test("verify that our reducer retains other todo's and does not complete them,", () => {
    const state = todoReducer({}, addTodo(todo1));
    const newState = todoReducer(state, addTodo(todo2));

    expect(newState).toStrictEqual({
      [todo1.id]: todo1,
      [todo2.id]: todo2,
    });
  });
  test('verify that our reducer sets the completed flag to true for the given todo,', () => {
    const initState = todoReducer({}, addTodo(todo1));
    const state = todoReducer(initState, addTodo(todo2));
    const newState = todoReducer(state, completeTodo(todo1));
    expect(newState[1].completed).toStrictEqual(true);
    expect(newState[2].completed).toStrictEqual(false);
  });
});
