import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
import Result from "../pages/find-your-shape/desktop/result";
import ChatBot from "../pages/virtual-services/chat-bot";
import SalePage from "../pages/outlet/sale-page";
import NewCollection from "../pages/outlet/new-collections";
import ProductDetail from "../pages/product/product-detail";
import NewCollectionItem from "../pages/outlet/new-collection-item";
import Cart from "../pages/Cart/cart-page";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//       },
//       {
//         path: PATH_PAGE.virtualServices,
//         element: <VirtualServices />,
//       },
//       {
//         path: "sale",
//         element: <SalePage />,
//       },
//     ],
//   },
// ]);
import VirtualConsultation from "../pages/virtual-services/virtual-consultation";
import Step2Mobile from "../pages/find-your-shape/mobile/step-2-android";

const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path={PATH_PAGE.main} element={<SalePage />} />
          <Route
            path={PATH_PAGE.virtualServices.root}
            element={<VirtualServices />}
          />
          <Route
            path={PATH_PAGE.virtualServices.virtualConsultation}
            element={<VirtualConsultation />}
          />
          <Route
            path={PATH_PAGE.virtualServices.chatBot}
            element={<ChatBot />}
          />
          <Route
            path={PATH_PAGE.findYourShape.root}
            element={<FindYourShape />}
          />
          <Route path={PATH_PAGE.findYourShape.result} element={<Result />} />
          <Route path={PATH_PAGE.outlet.sale} element={<SalePage />} />
          <Route path={PATH_PAGE.outlet.new} element={<SalePage />} />
          <Route path={PATH_PAGE.outlet.bestSeller} element={<SalePage />} />
          <Route path={PATH_PAGE.outlet.makeup} element={<SalePage />} />
          <Route path={PATH_PAGE.outlet.skincare} element={<SalePage />} />
          <Route
            path={PATH_PAGE.outlet.newCollection}
            element={<NewCollection />}
          />
          <Route
            path={PATH_PAGE.outlet.newCollectionItem}
            element={<NewCollectionItem />}
          />
          <Route path={PATH_PAGE.outlet.cart} element={<Cart />} />
          <Route
            path={PATH_PAGE.outlet.productDetail}
            element={<ProductDetail />}
          />
          <Route path="*" element={<Navigate to={PATH_PAGE.main} />} />
        </Route>

        <Route path="/mobile" element={<Mobile />}>
          <Route
            path={PATH_PAGE.mobile.findYourShape.step1}
            element={<Step1 />}
          />
          <Route
            path={PATH_PAGE.mobile.findYourShape.step2}
            element={window.cordova ? <Step2Mobile /> : <Step2Mobile />}
          />
          <Route
            path={PATH_PAGE.mobile.findYourShape.step3}
            element={<Step3 />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterProvider;
