import { TMDB_IMG_BASE_URL } from "../utils/constants";

const MovieCard = ({ info }) => {
  const { title, poster_path } = info;
  return (
    <div className="hover:shadow-lg transition-transform hover:translate-y-[-30px]">
      {poster_path && (
        <div className="min-w-44 min-h-[20rem] flex">
          <img
            className="w-full object-scale-down aspect-auto rounded"
            src={TMDB_IMG_BASE_URL + poster_path}
            alt={title + "poster"}
          ></img>
        </div>
      )}
    </div>
  );
};
export default MovieCard;
