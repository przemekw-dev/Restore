import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  data: number;
};

const initialState: CounterState = {
  data: 42,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.data += 1;
    },
    decrement: (state) => {
      state.data -= 1;
    },
    incrementByAmount: (state, action) => {
      state.data += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
