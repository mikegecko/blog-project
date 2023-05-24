import { createBrowserRouter } from "react-router-dom";
import Root, { rootLoader } from "../routes/Root";
import ErrorPage from "../routes/ErrorPage";
import Home, { homeLoader } from "../routes/Home";
import PostView, { postViewLoader } from "../routes/PostView";
import PostList, { postListLoader } from "../routes/PostList";
import Login, { loginLoader } from "../routes/Login";
import Signup, { signupLoader } from "../routes/Signup";
import About, { aboutLoader } from "../routes/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/posts",
        element: <PostList />,
        loader: postListLoader,
      },
      {
        path: "/post/:id",
        element: <PostView />,
        loader: postViewLoader,
      },
      {
        path: "/login",
        element: <Login />,
        loader: loginLoader,
      },
      {
        path: "/signup",
        element: <Signup />,
        loader: signupLoader,
      },
      {
        path: "/about",
        element: <About />,
        loader: aboutLoader,
      },
    ],
  },
]);
