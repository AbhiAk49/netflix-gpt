const Search = () => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center relative">
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg')] absolute top-0 left-0 right-0 bottom-0 blur-sm"></div>
      <form className="z-[1] flex gap-5 w-4/5 items-center justify-center">
        <input
          type="text"
          className="outline-none bg-slate-900 p-2 rounded text-white shadow shadow-slate-900 placeholder:font-thin placeholder:text-sm w-3/5"
          placeholder="What are you watching today ?"
        ></input>
        <button className="text-white bg-black rounded-sm p-2 shadow shadow-slate-900">
          Search
        </button>
      </form>
    </div>
  );
};
export default Search;
