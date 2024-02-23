import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/home";
import { Error } from "../pages/error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/*",
    element: (
      <Layout>
        <Error />
      </Layout>
    ),
  },
]);
export default Router;
