import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const decksSlice = createSlice({
  name: "Decks",
  initialState: [],
  reducers: {
    deckAdded: (decks, action) => {
      decks.push({
        id: uuidv4(),
        questions: [],
        title: action.payload.title,
      });
    },
  },
});

export const { deckAdded } = decksSlice.actions;
export default decksSlice.reducer;
