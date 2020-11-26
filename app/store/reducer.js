import { combineReducers } from "redux";
import decksReducer from "./decks";
import scoreReducer from "./score";

export default combineReducers({
  decks: decksReducer,
  score: scoreReducer,
});
