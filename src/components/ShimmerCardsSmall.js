const ShimmerCardsSmall = ({ num = 5 }) => {
  const cards = [];
  for (let i = 1; i <= num; i++) {
    cards.push(
      <div
        className="bg-slate-800 min-w-72 min-h-72 p-4 rounded-lg opacity-70 mx-auto
      "
      ></div>
    );
  }
  return (
    <div className="flex flex-wrap gap-3 justify-between items-center my-12">
      {cards.map((card) => card)}
    </div>
  );
};
export default ShimmerCardsSmall;
