import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home, { homeLoader } from "./routes/Home";
import Root, { rootLoader } from "./routes/Root";
import PostView, { postViewLoader } from './routes/PostView';

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  loader: rootLoader,
  children: [
    {
      path:"/home",
      element: <Home />,
      loader: homeLoader,
    },
    {
      path:"/post/:id",
      element: <PostView />,
      loader: postViewLoader,
    },
  ],
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
