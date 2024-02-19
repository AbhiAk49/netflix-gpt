const VideoInfo = ({ title, overview, poster_path }) => {
  return (
    <div className="w-full p-3 absolute top-0 bg-gradient-to-r from-black pt-[20rem]">
      <div>
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
        <div className="m-2 flex w-[12.5%] items-center justify-between ml-2">
          <button className="bg-black shadow rounded opacity-50 text-white p-2">
            ▶︎ Play Now
          </button>
          <button className="bg-black shadow rounded opacity-50 text-white p-2">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoInfo;
