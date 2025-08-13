import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantsMenu from "./components/RestaurantsMenu";

const AppLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  return <RouterProvider router={appRouter} />;
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement : <Error/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurantsMenu />,
      },
    ],
  },
]);

export default App;
