import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login, { loginLoader } from './routes/Login';
import Home, { homeLoader } from "./routes/Home";
import Root, { rootLoader } from "./routes/Root";
import PostView, { postViewLoader } from './routes/PostView';
import ErrorPage from './routes/ErrorPage';
import Settings, { settingsLoader } from './routes/Settings';
import PostEditor, { postEditorLoader } from './routes/PostEditor';

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
      path:"/posts",
      element: <PostView />,
      loader: postViewLoader,
    },
    {
      path:"/post/:id",
      element: <PostView />,
      loader: postViewLoader,
    },
    {
      path:"/edit",
      element: <PostEditor />,
      loader: postEditorLoader,
    },
    {
      path:"/edit/:id",
      element: <PostEditor />,
      loader: postEditorLoader,
    },
    {
      path:"settings",
      element: <Settings />,
      loader: settingsLoader,
    }
  ],
},{
  path: "/login",
  element: <Login />,
  errorElement: <ErrorPage />,
  loader: loginLoader,
}]);
// Redirects to login if no token is found
// const jwt = localStorage.getItem('blogToken');
// if(!jwt){
//   router.navigate('/login');
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
