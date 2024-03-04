import MovieMainContainer from "./MovieMainContainer";
import MovieSecondaryContainer from "./MovieSecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
const MovieMain = () => {
  useNowPlayingMovies();
  return (
    <div>
      {/**
       *
       * MovieMainContainer
       *  - VideoPlayingInBg
       *  - Video Title&Description
       *
       * MovieSecondaryContainer
       *  - MoviesList * n
       *    - MoviesList:
       *      - MovieCard * m
       */}
      <MovieMainContainer />
      <MovieSecondaryContainer />
    </div>
  );
};
export default MovieMain;
