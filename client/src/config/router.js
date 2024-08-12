import { createBrowserRouter } from "react-router-dom";
import Visitor from "../pages/Visitor.js";
import FourOFour from "../pages/FourOFour.js";
import Home from "../pages/Home.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/:link", element: <Visitor /> },
  { path: "/test", element: <FourOFour /> },
  { path: "test", element: <FourOFour /> },
]);

export default router;
