import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Visitor from "../pages/Visitor.js";
import FourOFour from "../pages/FourOFour.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [{ path: "/:link", element: <Visitor /> }],
  },
  { path: ":link", element: <Visitor /> },
  // { path: "visit/:link", element: <Visitor /> },
  { path: "/test", element: <FourOFour /> },
]);

export default router;
