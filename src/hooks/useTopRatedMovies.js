import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_TOP_RATED_MOVIES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/store/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(TMDB_TOP_RATED_MOVIES, TMDB_API_OPTIONS);
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.error(`Error from getTopRatedMovies: ${error}`);
    }
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
