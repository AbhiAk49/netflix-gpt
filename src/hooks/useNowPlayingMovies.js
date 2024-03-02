import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_NOW_PLAYING_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addCurrentlySelected } from "../utils/store/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(TMDB_NOW_PLAYING_API, TMDB_API_OPTIONS);
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results));
      if(data.results && data.results.length){
        //store first fetched movie as currently playing
        dispatch(addCurrentlySelected(data.results[0]));
      }
    } catch (error) {
      console.error(`Error from getNowPlayingMovies: ${error}`);
    }
  };
  useEffect(() => {
    // fetching now playing movies
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
