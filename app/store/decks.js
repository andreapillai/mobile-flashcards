import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import sampleDecks from "../utils/sampleDecks";

const decksSlice = createSlice({
  name: "Decks",
  initialState: [],
  reducers: {
    sampleDecksLoaded: (decks) => {
      decks.push(...sampleDecks);
      // todo write to cache
    },
    deckAdded: (decks, action) => {
      decks.push({
        id: uuidv4(),
        questions: [],
        title: action.payload.title,
      });
      // todo write to cache
    },
    decksCleared: (decks) => {
      decks.splice(0, decks.length);
      // todo write to cache
    },
  },
});

export const {
  deckAdded,
  decksCleared,
  sampleDecksLoaded,
} = decksSlice.actions;
export default decksSlice.reducer;
