import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState:{
    cartItems: []
  },

  reducers: {
    inc(state) {
      state.counter++;
    },
    dec(state) {
      state.counter--;
    },
  },
});

export const counterActions = counterSlice.actions;

export const store = configureStore({
  reducer: {
    counterObject: counterSlice.reducer,
  },
});