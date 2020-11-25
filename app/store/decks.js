import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const decksSlice = createSlice({
  name: "Decks",
  initialState: [],
  reducers: {
    deckAdded: (decks, action) => {
      console.group("DECK ADDED");
      console.log(decks);
      console.log(action);
      console.groupEnd();
    },
  },
});

export const { deckAdded } = decksSlice.actions;
export default decksSlice.reducer;
