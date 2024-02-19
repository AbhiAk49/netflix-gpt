const VideoInfo = ({ title, overview, poster_path }) => {
  return (
    <div className="w-full p-3">
      <div>
        {title && (
          <h4 className="mt-6 text-4xl font-medium leading-6 text-gray-800">
            {title}
          </h4>
        )}
        {overview && (
          <p className="mt-6 text-lg font-medium leading-6 text-gray-800 w-1/2">
            {overview}
          </p>
        )}
      </div>
    </div>
  );
};
export default VideoInfo;
