import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import Page from "./pages/Page";
import Shop from "./pages/Shop";
import Sale from "./pages/Sale";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/cart", element: <Cart /> },
        { path: "/contacts", element: <Contacts /> },
        { path: "/man", element: <Man /> },
        { path: "/woman", element: <Woman /> },
        { path: "/page", element: <Page /> },
        { path: "/shop", element: <Shop /> },
        { path: "/sale", element: <Sale /> },
      ],
    },


    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
