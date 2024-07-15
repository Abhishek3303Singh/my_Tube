import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./components/utils/Store";
import ContantContainer from "./components/ContantContainer";
import VideoPlayPage from "./components/VideoPlayPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <ContantContainer />,
        },
        {
          path:"watch",
          element:<VideoPlayPage/>
        }
      ],
    },
  ]);
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
