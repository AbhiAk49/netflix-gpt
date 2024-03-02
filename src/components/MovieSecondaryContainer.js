import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieSecondaryContainer = () => {
  useTopRatedMovies();
  usePopularMovies();
  useTrendingMovies();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlaying);
  const topRatedMovies = useSelector((store) => store.movies.topRated);
  const popularMovies = useSelector((store) => store.movies.popular);
  const trendingMovies = useSelector((store) => store.movies.trending);
  const list = [
    { title: "New in Theaters", cards: nowPlayingMovies.slice(1) },
    { title: "Highly Rated Movies", cards: topRatedMovies },
    { title: "Popular Movies", cards: popularMovies },
    { title: "Trending Movies this week", cards: trendingMovies },
  ];
  return (
    <div className="text-white -mt-[5.5rem] relative z-10 pb-5">
      {/***
       * MovieList Component - horizontal scrollable
       *  - List of movie cards * n
       *
       * => Released in Past Year
       * => Trending Movies
       * => Movies By Genres
       *
       */}
      {list.map((item) => (
        <MovieList
          key={item.title}
          title={item.title}
          cards={item.cards}
        ></MovieList>
      ))}
    </div>
  );
};
export default MovieSecondaryContainer;
