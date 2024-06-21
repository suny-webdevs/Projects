import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import Error from "../pages/Error"
import Home from "../pages/Home"
import Login from "../pages/Authentication/Login"
import SignUp from "../pages/Authentication/SignUp"
import CheckOut from "../pages/CheckOut"
import Bookings from "../pages/Bookings"
import PrivateRoute from "./PrivateRoute"
import Services from "../components/Home/Service/Services"

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "checkOut/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
])

export default router
