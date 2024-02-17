import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
