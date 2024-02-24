import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MovieMainContainer from "./MovieMainContainer";
import MovieSecondaryContainer from "./MovieSecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="bg-black">
      <Header></Header>
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
export default Browse;
