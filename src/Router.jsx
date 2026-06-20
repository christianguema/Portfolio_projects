import { createBrowserRouter  } from "react-router";
import Layout from "./components/layouts/layout";
import { HomePage } from "./pages/HomePage";
import { CvPage } from "./pages/CvPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogArticlePage } from "./pages/BlogArticlePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "cv",
        element: <CvPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      { path: "blog/:slug", 
        element: <BlogArticlePage /> 
      },
    ],
  },
]);