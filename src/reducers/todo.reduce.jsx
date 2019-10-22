const ADD_TODO = 'ADD_TODO';

function todoReducer(initalState = {}, action) {
  switch (action && action.type) {
    case ADD_TODO: {
      const { payload } = action;
      return { [payload.id]: payload };
    }
    default:
      return initalState;
  }
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export default todoReducer;
