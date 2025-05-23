import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Contactus from "../Pages/Contactus";
import Home from "../Pages/Home";
import Page404 from "../Pages/Page404";
import AccountSettings from "../Pages/AccountSettings";
import ProductDetails from "../Pages/ProductDetails";
import Checkout from "../Pages/Checkout";
import Cart from "../Pages/Cart";
import Wishlist from "../Pages/Wishlist";
import About from "../Pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/contacus", element: <Contactus /> },
      { path: "/home", element: <Home /> },
      { path: "*", element: <Page404 /> },
      { path: "productdetails", element: <ProductDetails /> },
      { path: "checkout", element: <Checkout /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/about", element: <About /> },

      { path: "cart", element: <Cart /> },
    ],
  },
]);
export default routes;
// 