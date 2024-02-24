import MovieCard from "./MovieCard";

const MovieList = ({ title, cards = [] }) => {
  return (
    <div className="mx-24 mb-10">
      <h1 className="text-bold text-2xl mb-3">{title}</h1>
      <div className="flex w-full overflow-x-scroll gap-8">
      {cards.map((card, idx) => (
        <MovieCard key={card.title + idx} info={card}></MovieCard>
      ))}
      </div>
    </div>
  );
};
export default MovieList;
