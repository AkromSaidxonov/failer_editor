import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: "text",
  initialState: {
    text: [],
    status: null,
    error: null,
  },
  reducers: {
    addText: (state, action) => {
      state.text.push(action.payload);
      return state;
    },
    removeText: (state, action) => {
      state.text = state.text.filter((item) => item.id !== action.payload);
      return state;
    },
  },
});
export default todo.reducer;

export const { addText, removeText } = todo.actions;
