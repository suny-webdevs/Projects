import { createBrowserRouter } from "react-router-dom"
import Main from "../Layouts/Main"
import Error from "../Pages/Error"
import Home from "../Pages/Home"
import OurMenu from "../Pages/OurMenu"
import ContactUs from "../Pages/ContactUs"
import OurShop from "../Pages/OurShop"
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp"
import Cart from "../Pages/Cart"
import Dashboard from "../Layouts/Dashboard"
import PrivateRoute from "./PrivateRoute"
import UserHome from "../Pages/UserHome"
import AllUsers from "../Pages/AllUsers"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/our-shop/:category",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "user-home",
        element: <UserHome />,
      },

      {
        path: "all-users",
        element: <AllUsers />,
      },
    ],
  },
])

export default router
