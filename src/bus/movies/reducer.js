// Types
import { types } from "./types";

const initialState = {
  isFetching: false,
  error: null,
  data: {
    subscriptions: [],
    favories: []
  }
};

export const moviesReducer = (state = initialState, action) => {
  const { type, payload, error, meta } = action;
  switch (type) {
    case types.MOVIES_START_FETCHING:
      return { ...state, isFetching: true };
    case types.MOVIES_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.MOVIES_FILL:
      return { ...state, data: { ...state.data, ...payload } };
    case types.MOVIES_SET_FETCHING_ERROR:
      return {
        ...state,
        error: {
          data: payload,
          error,
          meta
        }
      };
    default:
      return state;
  }
};
