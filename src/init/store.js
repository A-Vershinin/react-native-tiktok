// Core
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";

// Middleware
import { composeEnhancers, middleware } from "./middleware";

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
