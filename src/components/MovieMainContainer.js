import ShimmerMain from "./ShimmerMain";
import VideoInfo from "./VideoInfo";
import VideoPlayingInBg from "./VideoPlayingInBg";
import { useSelector } from "react-redux";
import { useState } from "react";
const MovieMainContainer = () => {
  const mainMovie = useSelector((store) => store.movies.currentlySelected);
  const [muted, setMuted] = useState(null);
  return (
    <div className="mt-0">
      {mainMovie && mainMovie.id ? (
        <div>
          <VideoPlayingInBg
            movieId={mainMovie.id}
            muteProps={[muted, setMuted]}
          ></VideoPlayingInBg>
          <VideoInfo
            title={mainMovie.title}
            overview={mainMovie.overview}
            poster={mainMovie.poster_path}
            muteProps={[muted, setMuted]}
          ></VideoInfo>
        </div>
      ) : (
        <ShimmerMain></ShimmerMain>
      )}
    </div>
  );
};
export default MovieMainContainer;
