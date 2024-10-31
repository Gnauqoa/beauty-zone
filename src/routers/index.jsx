import {
  createBrowserRouter,
  RouterProvider as ReactRouterDomProvider,
} from "react-router-dom";
import Root from "./root";
import ErrorPage from "./error-page";
import Contact from "./contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },

]);

const RouterProvider = () => {
  return <ReactRouterDomProvider router={router} />;
};

export default RouterProvider;
