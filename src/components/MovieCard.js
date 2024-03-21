import { TMDB_IMG_BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCurrentlySelected } from "../utils/store/movieSlice";

const MovieCard = ({ info }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addCurrentlySelected(info));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const { title, poster_path } = info;
  return (
    <div
      onClick={handleClick}
    >
      {poster_path && (
        <div className="min-w-48 flex rounded max-h-80">
          {poster_path && (
            <img
              className="w-full object-cover aspect-auto rounded h-80"
              src={TMDB_IMG_BASE_URL + poster_path}
              alt={title + "poster"}
            ></img>
          )}
        </div>
      )}
    </div>
  );
};
export default MovieCard;
