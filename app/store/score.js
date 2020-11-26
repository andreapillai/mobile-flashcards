import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "Score",
  initialState: 0,
  reducers: {
    scoreIncreased: (score) => {
      return ++score;
    },
    scoreReset: (score) => {
      let resetScore = 0;
      return resetScore;
    },
  },
});

export const { scoreIncreased, scoreReset } = scoreSlice.actions;
export default scoreSlice.reducer;
