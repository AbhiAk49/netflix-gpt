import ShimmerMain from "./ShimmerMain";
import VideoInfo from "./VideoInfo";
import VideoPlayingInBg from "./VideoPlayingInBg";
import { useSelector } from "react-redux";
const MovieMainContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlaying);
  console.log("nowPlayingMovies", nowPlayingMovies);
  const mainMovie = nowPlayingMovies.length && nowPlayingMovies[0];
  return (
    <div className="mt-20">
      {mainMovie ? (
        <div>
          <VideoPlayingInBg></VideoPlayingInBg>
          <VideoInfo
            title={mainMovie.title}
            overview={mainMovie.overview}
            poster={mainMovie.poster_path}
          ></VideoInfo>
        </div>
      ) : (
        <ShimmerMain></ShimmerMain>
      )}
    </div>
  );
};
export default MovieMainContainer;
