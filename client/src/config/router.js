import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Visitor from "../pages/Visitor.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: ":link", element: <Visitor /> },
  { path: "visit/:link", element: <Visitor /> },
]);

export default router;
