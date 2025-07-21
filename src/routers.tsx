import { createBrowserRouter } from "react-router";
import Index from "./pages/index.tsx";
import Login from "./pages/login.tsx";
import DefaultLayout from "./layouts/DefaultLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      { index: true, Component: Index },
      {
        path: "auth",
        children: [{ path: "login", Component: Login }],
      },
    ],
  },
]);

export default router;
