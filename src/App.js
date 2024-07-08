import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import LoadingSpinner from "./components/LoadingSpinner";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import Shimmer from "./components/Shimmer";

const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Body = lazy(() => import("./components/Body"));

const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    let user = localStorage.getItem("data");
    setCurrentUser(JSON.parse(user));
  }, [isLoggedIn]);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ data: currentUser, setIsLoggedIn }}>
        <Header />
        {onlineStatus ? (
          <Outlet />
        ) : (
          <h1 className="font-bold text-2xl text-center mt-40">
            You are offline, Please check your internet connection
          </h1>
        )}
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />,
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
