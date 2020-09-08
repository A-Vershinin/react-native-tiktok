// Core
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// Utils
import { moviesThunks } from "../thunks";

export const useMovies = () => {
  const dispatch = useDispatch();

  const onFetchMoviesAsync = useCallback(
    () => dispatch(moviesThunks.fetchMovies()),
    [dispatch]
  );

  useEffect(() => {
    onFetchMoviesAsync();
  }, [onFetchMoviesAsync]);

  const { data, isFetching, error } = useSelector(state => state.movies);

  return {
    data,
    isFetching,
    error
  };
};
