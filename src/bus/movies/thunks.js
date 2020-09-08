// Actions
import { moviesActions } from "./actions";

// Utils
import { api } from "../../api";

export const moviesThunks = Object.freeze({
  fetchMovies: () => async dispatch => {
    try {
      dispatch(moviesActions.startFetchingAsync());
      dispatch(moviesActions.startFetching());

      const response = await api.movies.fetch();
      const result = await response.json();
      // imitation response delay from api
      await new Promise(resolve => setTimeout(() => resolve(), 1500));

      if (response.status !== 200) {
        throw new Error("Not found");
      }

      dispatch(moviesActions.fill(result));
    } catch (error) {
      dispatch(
        moviesActions.setFetchingError(error.message, "fetchMovies thunk")
      );
    } finally {
      dispatch(moviesActions.stopFetching());
    }
  }
});
