import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MasterLayout from "./components/MasterLayout/MasterLayout";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import AllCars from "./components/Cars/AllCars/AllCars";
import CarDetails from "./components/Cars/CarDetails/CarDetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "home",
          element: <Home />,
        },
        { path: "home/allCars", element: <AllCars /> },
        { path: "carDetails", element: <CarDetails /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
