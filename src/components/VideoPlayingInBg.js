import { YOUTUBE_EMBEDED_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import useFetchMovieTrailer from "../hooks/useFetchMovieTrailer";
import VideoPlayer from "./VideoPlayer";
import { useEffect, useRef } from "react";
import ShimmerMain from "./ShimmerMain";

const VideoPlayingInBg = ({ movieId, muteProps }) => {
  const [muted, setIsMuted] = muteProps;
  useFetchMovieTrailer(movieId);
  const playerRef = useRef(null);
  const playingTrailer = useSelector((state) => state.movies.playingTrailer);

  const videoJsOptions = {
    autoplay: "muted",
    controls: false,
    responsive: true,
    fluid: true,
    loop: true,
    preload: true,
  };

  const handlePlayerReady = (player, arg) => {
    playerRef.current = player;
    player.on("ready", () => {
      setIsMuted(false);
      player.volume(0.01);
    });

    player.on("dispose", () => {});
  };

  useEffect(() => {
    if (playerRef && playerRef.current) {
      const vp = playerRef.current.player();
      vp.muted(!muted);
    }
  }, [muted]);

  return (
    <div>
      <div className="w-screen">
        {playingTrailer ? (
          <VideoPlayer
            options={{
              ...videoJsOptions,
              sources: [
                {
                  type: "video/youtube",
                  src: YOUTUBE_EMBEDED_URL(playingTrailer.key),
                },
              ],
            }}
            onReady={handlePlayerReady}
          ></VideoPlayer>
        ) : (
          <ShimmerMain></ShimmerMain>
        )}
      </div>
    </div>
  );
};
export default VideoPlayingInBg;
