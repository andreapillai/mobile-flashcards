import { createSlice, createSelector } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import sampleDecks from "../utils/sampleDecks";
import cache from "../utils/cache";

const decksSlice = createSlice({
  name: "Decks",
  initialState: [],
  reducers: {
    cachedDecksLoaded: (decks, action) => {
      decks.push(...action.payload);
    },
    sampleDecksLoaded: (decks) => {
      decks.push(...sampleDecks);
      storeCache(decks);
    },
    deckAdded: (decks, action) => {
      decks.push({
        id: uuidv4(),
        questions: [],
        title: action.payload.title,
      });
      storeCache(decks);
    },
    decksCleared: (decks) => {
      decks.splice(0, decks.length);
      storeCache(decks);
    },
    deckDeleted: (decks, action) => {
      const filtered = decks.filter((deck) => deck.id !== action.payload.id);
      storeCache(filtered);
      return filtered;
    },
    questionAdded: (decks, action) => {
      const { id, question } = action.payload;
      const deckToUpdate = decks.find((d) => d.id === id);
      deckToUpdate.questions.push(question);
      decks.map((d) => (d.id !== id ? d : deckToUpdate));
      storeCache(decks);
    },
  },
});

export const {
  deckAdded,
  decksCleared,
  sampleDecksLoaded,
  deckDeleted,
  questionAdded,
  cachedDecksLoaded,
} = decksSlice.actions;
export default decksSlice.reducer;

const storeCache = (decks) => {
  cache.store(decks);
};

export const checkCachedDecks = async () => {
  const cachedDecks = await cache.get();
  return cachedDecks;
};

export const getDeckByTitle = (title) =>
  createSelector(
    (state) => state,
    (state) => state.filter((d) => d.title === title)
  );
export const getDeckById = (id) =>
  createSelector(
    (state) => state,
    (state) => state.filter((d) => d.id === id)
  );
