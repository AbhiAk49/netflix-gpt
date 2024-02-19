import { YOUTUBE_EMBEDED_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import useFetchMovieTrailer from "../hooks/useFetchMovieTrailer";

const VideoPlayingInBg = ({ movieId }) => {
  const playingTrailer = useSelector((state) => state.movies.playingTrailer);
  useFetchMovieTrailer(movieId);
  return (
    <div>
      <div className="w-screen bg-gradient-to-b from-gray-700 to-black">
        {playingTrailer && (
          <iframe
            className="w-screen aspect-video"
            src={YOUTUBE_EMBEDED_URL(playingTrailer.key)}
            title="NetflixGPT video player"
          ></iframe>
        )}
      </div>
    </div>
  );
};
export default VideoPlayingInBg;
