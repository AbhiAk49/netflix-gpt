import { TMDB_IMG_BASE_URL } from "../utils/constants";

const VideoInfo = ({ title, overview, poster, muteProps }) => {
  const [muted, setIsMuted] = muteProps;
  function handleMuteToggle() {
    setIsMuted(!muted);
  }
  return (
    <div className="w-screen aspect-video p-3 absolute top-0 bg-gradient-to-r from-black pt-[15rem] pl-20">
      <div>
        {poster && (
          <div className="max-w-44 max-h-44 flex">
            <img
              className="w-full object-scale-down aspect-auto"
              src={TMDB_IMG_BASE_URL + poster}
              alt={title + "poster"}
            ></img>
          </div>
        )}
        {title && (
          <h4 className="mt-6 text-4xl font-medium leading-6 text-white">
            {title}
          </h4>
        )}
        {overview && (
          <p className="mt-6 text-lg font-medium leading-6 text-white w-1/2">
            {overview}
          </p>
        )}
        <div className="flex justify-between">
          <div className="m-2 flex w-[15%] items-center justify-between ml-2 mt-4">
            <button className="bg-white shadow shadow-slate-900 rounded opacity-90 text-black p-2 px-3 hover:opacity-100  hover:shadow-lg hover:shadow-slate-500">
              ▶︎ Play Now
            </button>
            <button className="bg-black shadow shadow-slate-900 rounded opacity-90 text-white p-2 px-3 hover:shadow-lg hover:shadow-slate-800 hover:opacity-100">
              More Info
            </button>
          </div>
          {muted !== null && (
            <button
              className="bg-black shadow shadow-slate-900 rounded opacity-90 text-white p-2 px-3 hover:shadow-lg hover:shadow-slate-800 hover:opacity-100 m-2 mt-4 translate-y-[165px] -translate-x-[3.25rem]"
              onClick={handleMuteToggle}
            >
              {!muted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default VideoInfo;
