// Core
import { compose } from "redux";

// Middleware
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

// Core
import { __DEV__ } from "../utils";

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: action => {
      return action.error ? "firebrick" : "deepskyblue";
    },
    prevState: () => "#1C5FAF",
    action: () => "#149945",
    nextState: () => "#A47104",
    error: () => "#ff0005"
  }
});

const devtools =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [thunk];

if (__DEV__) {
  middleware.push(logger);
}

export { composeEnhancers, middleware };
