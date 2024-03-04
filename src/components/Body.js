import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieMain from "./MovieMain";
import Search from "./Search";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
    children: [
      {
        path: '',
        element: <MovieMain/>
      },
      {
        path: 'search',
        element: <Search/>
      }
    ]
  },
]);
const Body = () => {
  return <RouterProvider router={appRouter}></RouterProvider>;
};
export default Body;
