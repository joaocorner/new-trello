import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //initial state of the todo slice
  count: 0, //intended to be the number of todos, initialized to 0
  todos: [], //intended to be an array of todos, initialized to an empty array
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload.text,
        status: false,
        title: action.payload.title,
        tag: action.payload.tag,
      };
      state.todos.push(todo);
      state.count++;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count--;
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; //export the actions from the slice
export default todoSlice.reducer; //export the reducer from the slice
