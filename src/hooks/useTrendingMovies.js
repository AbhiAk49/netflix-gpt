import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_TRENDING_WK_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addTrendingMovies } from "../utils/store/movieSlice";

const useTrendingMovies = () => {
  const trendingMovies = useSelector(store => store.movies.trending); 
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    try {
      const response = await fetch(TMDB_TRENDING_WK_MOVIES, TMDB_API_OPTIONS);
      const data = await response.json();
      dispatch(addTrendingMovies(data.results));
    } catch (error) {
      console.error(`Error from getTrendingMovies: ${error}`);
    }
  };
  useEffect(() => {
    !trendingMovies.length && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
