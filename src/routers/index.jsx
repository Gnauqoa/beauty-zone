import {
  createBrowserRouter,
  RouterProvider as ReactRouterDomProvider,
} from "react-router-dom";
import Root from "./root";
import ErrorPage from "../pages/error-page";
import Contact from "../pages/contact";
import { PATH_PAGE } from "./path";
import VirtualServices from "../pages/virtual-services";
import FindYourShape from "../pages/find-your-shape";

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
      {
        path: PATH_PAGE.virtualServices,
        element: <VirtualServices />,
      },
      {
        path: PATH_PAGE.findYourShape,
        element: <FindYourShape />,
      },
    ],
  },
]);

const RouterProvider = () => {
  return <ReactRouterDomProvider router={router} />;
};

export default RouterProvider;
