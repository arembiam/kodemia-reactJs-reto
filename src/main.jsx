import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import NewPost from "./pages/NewPost";
import NewUser from "./pages/NewUser";
import PostDetail from "./pages/PostDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  },
  {
    path: "/NewPost",
    element: <NewPost />,
  },
  {
    path: "/NewUser",
    element: <NewUser />,
  },
  {
    path: "/PostDetail",
    element: <PostDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
