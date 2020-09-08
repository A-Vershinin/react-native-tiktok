// Types
import { types } from "./types";

export const moviesActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.MOVIES_START_FETCHING
    };
  },
  stopFetching: () => {
    return {
      type: types.MOVIES_STOP_FETCHING
    };
  },
  setFetchingError: (error, meta = null) => {
    return {
      type: types.MOVIES_SET_FETCHING_ERROR,
      payload: error,
      error: true,
      meta
    };
  },
  fill: payload => {
    return {
      type: types.MOVIES_FILL,
      payload
    };
  },

  // Async
  startFetchingAsync: () => {
    return {
      type: types.MOVIES_FETCH_ASYNC
    };
  }
});
