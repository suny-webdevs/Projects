import { createBrowserRouter } from "react-router-dom"
import Main from "../Layouts/Main"
import Home from "../Pages/Home"
import Error from "../Pages/Error"
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp"

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
    ],
  },
])

export default router
