import { createSlice, createSelector } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import sampleDecks from "../utils/sampleDecks";

const decksSlice = createSlice({
  name: "Decks",
  initialState: [],
  reducers: {
    sampleDecksLoaded: (decks) => {
      decks.push(...sampleDecks);
      // TODO write to cache
    },
    deckAdded: (decks, action) => {
      decks.push({
        id: uuidv4(),
        questions: [],
        title: action.payload.title,
      });
      // TODO write to cache
    },
    decksCleared: (decks) => {
      decks.splice(0, decks.length);
      // TODO write to cache
    },
    deckDeleted: (decks, action) => {
      const filtered = decks.filter((deck) => deck.id !== action.payload.id);
      return filtered;
      // TODO write to cache
    },
    questionAdded: (decks, action) => {
      const { id, question } = action.payload; // destructure payload
      // console.group("ADD QUESTION");
      // console.log(id);
      // console.log(question);
      // console.groupEnd();
      const deckToUpdate = decks.find((d) => d.id === id); // find deck to update
      deckToUpdate.questions.push(question); // push question to deck
      decks.map((d) => (d.id !== id ? d : deckToUpdate));
      // TODO write to cache
    },
  },
});

export const {
  deckAdded,
  decksCleared,
  sampleDecksLoaded,
  deckDeleted,
  questionAdded,
} = decksSlice.actions;
export default decksSlice.reducer;

export const getDeckByName = (title) =>
  createSelector(
    (state) => state,
    (state) => state.filter((d) => d.title === title)
  );
export const getDeckById = (id) =>
  createSelector(
    (state) => state,
    (state) => state.filter((d) => d.id === id)
  );
