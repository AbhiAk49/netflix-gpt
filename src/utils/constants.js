export const TMDB_LANG = "en-IN";
export const APP_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const TMDB_NOW_PLAYING_API = `https://api.themoviedb.org/3/movie/now_playing`;

export const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";

export const TMDB_MOVIE_VIDEO_BY_ID = (movie_id) =>
  `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=${TMDB_LANG}`;

export const YOUTUBE_EMBEDED_URL = (key) =>
  `https://www.youtube.com/embed/${key}?si=brulDUDRhMwa-S7d&autoplay=1&mute=1&controls=0&loop=1&cc_load_policy=1&show_info=0`;

export const TMDB_TOP_RATED_MOVIES = `https://api.themoviedb.org/3/movie/top_rated?language=${TMDB_LANG}&page=1`;

export const TMDB_POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?language=${TMDB_LANG}&page=1`;

export const TMDB_TRENDING_WK_MOVIES = `https://api.themoviedb.org/3/trending/movie/week?language=${TMDB_LANG}`;

export const TMDB_MOVIE_SEARCH = (query) => `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US`;

//remove these --> move to env only
export const OPEN_AI_KEY = "";

//remove these --> move to env only
export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmY3N2RmNzljOGUzYjgwMzRlNDBhYmY1NGFmNGViMiIsInN1YiI6IjY1ZDMyMGQyOGRlMGFlMDE3Y2Q4ZmIwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1_Z-59gYIX3CwB_l3j837EbmWRwaTJWrE5xQqLMT2ok",
  },
};

//remove these --> move to env only
export const GOOGLE_AI_API_KEY = "";
