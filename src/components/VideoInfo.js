import { TMDB_IMG_BASE_URL } from "../utils/constants";

const VideoInfo = ({ title, overview, poster }) => {
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
        <div className="m-2 flex w-[15%] items-center justify-between ml-2 mt-4">
          <button className="bg-white shadow shadow-slate-900 rounded opacity-90 text-black p-2 px-3 hover:opacity-100  hover:shadow-lg hover:shadow-slate-500">
            ▶︎ Play Now
          </button>
          <button className="bg-black shadow shadow-slate-900 rounded opacity-90 text-white p-2 px-3 hover:shadow-lg hover:shadow-slate-800 hover:opacity-100">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoInfo;
