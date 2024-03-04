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
      behavior: 'smooth'
    });
  };
  const { title, poster_path } = info;
  return (
    <div className="hover:shadow-lg transition-transform hover:translate-y-[-30px]" onClick={handleClick}>
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
