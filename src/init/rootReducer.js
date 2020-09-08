// Core
import { combineReducers } from "redux";

// Reducers
import { moviesReducer as movies } from "../bus";

export const rootReducer = combineReducers({
  movies
});
