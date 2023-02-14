import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import User from "../components/User/User";
import ProtectedRout from "./ProtectedRout";
import Admin from "../components/admin/Admin";
import Shop from "../components/Shop";
import Checkout from "../components/User/Checkout";
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <User />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element:
      <ProtectedRout>
        <Admin />
      </ProtectedRout>,
  }
])