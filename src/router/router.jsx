import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../components/ErrorPage";
import Registration from "../components/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "/registration",
        Component: Registration,
      },
    ],
  },
]);
