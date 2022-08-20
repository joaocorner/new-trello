import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [], //intended to be an array of todos, initialized to an empty array
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 10000,
        text: action.payload.text,
        status: true,
        title: action.payload.title,
        tag: action.payload.tag,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; //export the actions from the slice
export default todoSlice.reducer; //export the reducer from the slice
