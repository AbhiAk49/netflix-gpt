import Header from "./Header";
import { Outlet } from "react-router-dom";
const Browse = () => {
  return (
    <div className="bg-black">
      <Header></Header>
      <Outlet />
    </div>
  );
};
export default Browse;
