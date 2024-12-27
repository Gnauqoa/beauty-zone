import {
  createBrowserRouter,
  RouterProvider as ReactRouterDomProvider,
} from "react-router-dom";
import Root from "./root";
import ErrorPage from "../pages/error-page";
import { PATH_PAGE } from "./path";
import VirtualServices from "../pages/virtual-services";
import FindYourShape from "../pages/find-your-shape";
import Step1 from "../pages/find-your-shape/mobile/step-1";
import Mobile from "./mobile";
import Step2 from "../pages/find-your-shape/mobile/step-2";
import Step3 from "../pages/find-your-shape/mobile/step-3";
import { Stack } from "@mui/material";
import Result from "../pages/find-your-shape/desktop/result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PATH_PAGE.main,
        element: <Stack sx={{ minHeight: "100vh" }}></Stack>,
      },
      {
        path: PATH_PAGE.virtualServices,
        element: <VirtualServices />,
      },
      {
        path: PATH_PAGE.findYourShape.root,
        element: <FindYourShape />,
      },
      {
        path: PATH_PAGE.findYourShape.result,
        element: <Result />,
      },
    ],
  },
  {
    path: "/mobile",
    element: <Mobile />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PATH_PAGE.mobile.findYourShape.step1,
        element: <Step1 />,
      },
      {
        path: PATH_PAGE.mobile.findYourShape.step2,
        element: <Step2 />,
      },
      {
        path: PATH_PAGE.mobile.findYourShape.step3,
        element: <Step3 />,
      },
    ],
  },
]);

const RouterProvider = () => {
  return <ReactRouterDomProvider router={router} />;
};

export default RouterProvider;
