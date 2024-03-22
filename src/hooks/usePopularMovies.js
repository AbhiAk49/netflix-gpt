import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_POPULAR_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/store/movieSlice";

const usePopularMovies = () => {
  const popularMovies = useSelector(store => store.movies.popular);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const response = await fetch(TMDB_POPULAR_MOVIES, TMDB_API_OPTIONS);
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.error(`Error from getNowPlayingMovies: ${error}`);
    }
  };
  useEffect(() => {
    !popularMovies.length && getPopularMovies();
  }, []);
};

export default usePopularMovies;
