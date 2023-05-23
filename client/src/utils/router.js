import { createBrowserRouter } from "react-router-dom";
import Root, {rootLoader} from "../routes/Root";
import ErrorPage from "../routes/ErrorPage";


export const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [

    ]

}])