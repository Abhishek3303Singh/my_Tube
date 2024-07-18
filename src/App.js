import React from "react";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./components/utils/Store";
import ContantContainer from "./components/ContantContainer";
import VideoPlayPage from "./components/VideoPlayPage";
import SearchResultPage from "./components/SearchResultPage";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const App = () => {
  const router = createBrowserRouter([
 
    {
      path:'/',
      element:<Layout/>,
      children:[

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
            },
            {
              path:"results",
              element:<SearchResultPage/>
    
            }
          ],
        },
      ]
    },
    
  ]);
  return (
    <div>
      <Provider store={store}>
        {/* <Header /> */}
        <RouterProvider router={router}/>
      </Provider>
      
    </div>
  );
};

export default App;
