import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_MOVIE_VIDEO_BY_ID } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/store/movieSlice";

const useFetchMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieVideos = async () => {
    try {
      const response = await fetch(
        TMDB_MOVIE_VIDEO_BY_ID(movieId),
        TMDB_API_OPTIONS
      );
      const data = await response.json();
      let mainTrailer = data?.results.find((e) => e.type === "Trailer");
      if (!mainTrailer) {
        mainTrailer = data?.results?.[0];
      }
      dispatch(addTrailerVideo(mainTrailer));
    } catch (error) {
      console.error(`Error from useFetchMovieTrailer: ${error}`);
    }
  };
  useEffect(() => {
    //fetch videos with movie Id
    fetchMovieVideos();
  }, [movieId]);
};

export default useFetchMovieTrailer;
