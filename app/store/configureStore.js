import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./decks";

export default function () {
  return configureStore({
    reducer,
    ...getDefaultMiddleware(),
  });
}
