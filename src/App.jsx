import "./App.css";
// import About from "./components/About";
import Body from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantsMenu from "./components/RestaurantsMenu";
import { lazy, Suspense, useState } from "react";
import UserContext from "./utils/userContext";
import {Provider} from "react-redux";
import appStore from "./Redux/appStore";
import Cart from "./components/Cart";
// import Grocery from "./compon ents/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayOut = () => {

  const [userName , setUserName] = useState("Ayush gupta");

  return (
    <>
    <Provider store={appStore}>
      <UserContext.Provider value ={{loggedInUser : userName , setUserName}}>
        <Header />
        <Outlet />
      </UserContext.Provider>
      </Provider>
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
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App;
