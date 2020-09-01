import { ADD_LOCATION } from "./actionTypes";

let location = 0;

export const addTodo = content => ({
  type: ADD_LOCATION,
  payload: {
    id: ++nextTodoId,
    content
  }
});