import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const MovieSearchSuggestions = ({ forceShow = false }) => {
  const searchedMovies = useSelector((store) => store.movies.searchResults);
  const searchedString = useSelector((store) => store.movies.searchForString);
  if (!forceShow && !searchedMovies.length) return null;
  return (
    <div className="z-[1] text-white mt-10 w-[80%] mx-4">
      {!searchedMovies.length ? (
        <div>
          <h1 className="text-2xl">No results found</h1>
          <h1 className="text-md m-1 mb-3">Showing Results for: {searchedString}</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl">{searchedMovies.length} Result(s) found</h1>
          <h1 className="text-md m-1 mb-3">Showing Results for: {searchedString}</h1>
          <div className="flex gap-6 overflow-x-scroll">
            {searchedMovies.map((card, idx) => (
              <MovieCard key={card.title + idx} info={card}></MovieCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default MovieSearchSuggestions;
