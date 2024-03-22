import { useRef, useState } from "react";
// import openai from "../utils/openai.config";
import bard from "../utils/googleai.config";
import {
  GOOGLE_AI_API_KEY,
  TMDB_API_OPTIONS,
  TMDB_MOVIE_SEARCH,
} from "../utils/constants";
import ShimmerCardsSmall from "./ShimmerCardsSmall";
import { useDispatch } from "react-redux";
import {
  populateSearchedMovies,
  clearSearchedMovies,
  setSearchForString,
} from "../utils/store/movieSlice";
import MovieSearchSuggestions from "./MovieSearchSuggestions";

const Search = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [aiAssist, setAiAssist] = useState(true);

  const searchInputRef = useRef(null);
  const onSubmit = (event) => {
    event.preventDefault();
  };

  async function searchInAiQuery() {
    try {
      const searchText = searchInputRef?.current?.value;
      const gptQuery = `Act as a movie recommendation system, give results as movie suggestions for the query: ${searchText}. Only give max 5 movie names in a comma seperated manner. Also remove the year in parenthesis from names. Example results: Movie Name 1, Movie Name 2, Movie Name 3, Movie Name 4, Movie Name 5`;

      // const results = await openai.chat.completions.create({
      //   messages: [{ role: "user", content: gptQuery }],
      //   model: "gpt-3.5-turbo",
      // });
      // return results?.choices;
      await bard.initializeChat(GOOGLE_AI_API_KEY);
      const results = await bard.getBardResponse(gptQuery);
      return results?.text;
    } catch (err) {
      console.error("searchGPTQuery error:", err);
      return null;
    }
  }

  async function searchMovieTMDB(string) {
    try {
      const response = await fetch(TMDB_MOVIE_SEARCH(string), TMDB_API_OPTIONS);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error from searchMovieTMDB: ${error}`);
      return null;
    }
  }

  const handleCheckboxChange = () => {
    setAiAssist(!aiAssist);
  };

  const handleSearchText = async () => {
    if (searchInputRef?.current?.value?.length < 1) return;
    dispatch(clearSearchedMovies());
    dispatch(setSearchForString(null));
    // search in tmdb or in AI search
    setIsLoading(true);
    setShowResults(true);
    if (!aiAssist) {
      const tmdbMovies = await searchMovieTMDB(
        searchInputRef?.current?.value
      );
      dispatch(setSearchForString(searchInputRef?.current?.value));
      dispatch(populateSearchedMovies(tmdbMovies.results));
    } else {
      const aiResults = await searchInAiQuery();
      const aiMoivesList = aiResults.split(", ");
      const tmdbResults = await Promise.all(
        aiMoivesList.map((movie) => searchMovieTMDB(movie))
      );
      const searchedMoviesFound = [];
      tmdbResults.forEach((res) => {
        if (res.results?.length) {
          if (res.results.length > 5) {
            let filteredRes = [];
            filteredRes = res.results.filter(movie => movie.original_language === 'hi' || movie.original_language === 'en');
            if (!filteredRes.length) {
              filteredRes = [res.results[0]];
            }
            searchedMoviesFound.push(...filteredRes);
          } else {
            searchedMoviesFound.push(...res.results);
          }
        }
      });
      dispatch(setSearchForString(searchInputRef?.current?.value));
      dispatch(populateSearchedMovies(searchedMoviesFound));
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-[100vh] flex justify-center items-center flex-col relative">
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg')] absolute top-0 left-0 right-0 bottom-0 blur-sm"></div>
      <form
        className="z-[1] flex gap-5 w-4/5 items-center justify-center"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          className="outline-none bg-slate-900 p-2 rounded text-white shadow shadow-slate-900 placeholder:font-thin placeholder:text-sm w-3/5"
          placeholder="What are you watching today ?"
          ref={searchInputRef}
        ></input>
        <button
          className="rounded p-2 shadow text-white bg-red-600 disabled:bg-slate-700"
          onClick={handleSearchText}
        >
          Search
        </button>

        <label htmlFor="toggle" className="flex items-center cursor-pointer bg-black p-2 rounded shadow">
          <span className="m-1 text-red-500 min-w-28">
            AI Assist : <span className={`${aiAssist ? 'text-gray-50': 'text-gray-400'}`}>{aiAssist ? "ON" : "OFF"}</span>
          </span>
          <input
            type="checkbox"
            checked={aiAssist}
            onChange={handleCheckboxChange}
            id="toggle"
            className="sr-only peer"
          />
          <div className="block relative bg-gray-100 w-16 h-9 p-1 rounded-full before:absolute before:bg-gray-900 before:w-7 before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-red-600"></div>
        </label>
      </form>
      {isLoading ? (
        <ShimmerCardsSmall num={5} />
      ) : (
        <MovieSearchSuggestions forceShow={showResults} />
      )}
    </div>
  );
};
export default Search;
