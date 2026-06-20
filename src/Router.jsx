import { createBrowserRouter  } from "react-router";
import Layout from "./components/layouts/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [

        {
          index: true,
          element: <>Acceuil</>,
        },
        
    ]
  },

  
]);