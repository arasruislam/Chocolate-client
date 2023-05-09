import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddChocolates from "../components/AddChocolates";
import AllChocolates from "../components/AllChocolates";
import UpdateChocolatesInfo from "../components/UpdateChocolatesInfo";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AllChocolates />,
        loader: () =>
          fetch("https://chocolate-website-asru-islam.vercel.app/chocolates"),
      },
      {
        path: "/addChocolates",
        element: <AddChocolates />,
      },
      {
        path: "/updateChocolatesInfo/:id",
        element: <UpdateChocolatesInfo />,
        loader: ({ params }) =>
          fetch(
            `https://chocolate-website-asru-islam.vercel.app/chocolates/${params.id}`
          ),
      },
    ],
  },
]);

export default Routes;
