import { useRef, useState } from "react";
import openai from "../utils/openai.config";
import bard from "../utils/googleai.config";
import { GOOGLE_AI_API_KEY } from "../utils/constants";
import ShimmerCardsSmall from "./ShimmerCardsSmall";

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchInputRef = useRef(null);
  const onSubmit = (event) => {
    event.preventDefault();
  };

  async function searchInAiQuery() {
    try {
      const searchText = searchInputRef?.current?.value;
      console.log("searchInAiQuery, searchText", searchText);
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

  const handleSearchText = async () => {
    // search in tmdb or in AI search
    setIsLoading(true);
    const aiResults = await searchInAiQuery();
    console.log("aiResults", aiResults);
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
          className="text-white bg-black rounded-sm p-2 shadow shadow-slate-900"
          onClick={handleSearchText}
        >
          Search
        </button>
      </form>
      {isLoading ? <ShimmerCardsSmall num={5}/> : ""}
    </div>
  );
};
export default Search;
