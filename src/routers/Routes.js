import Contact from "../pages/ContactPages/Contact";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import Home from "../pages/HomePages/Home";
import MenuPage from "../pages/MenuPages/MenuPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayouts } = require("../components/layouts/MainLayouts");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
    ],
  },
]);
