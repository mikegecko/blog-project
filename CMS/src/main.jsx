import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home, { homeLoader } from "./routes/Home";
import Root, { rootLoader } from "./routes/Root";
import PostView, { postViewLoader } from './routes/PostView';
import ErrorPage from './routes/ErrorPage';
import Settings, { settingsLoader } from './routes/Settings';

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
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
    {
      path:"settings",
      element: <Settings />,
      loader: settingsLoader,
    }
  ],
},]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
