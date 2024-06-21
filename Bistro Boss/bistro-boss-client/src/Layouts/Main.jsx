import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"

const Main = () => {
  const location = useLocation()
  const onlyLogin = location.pathname.includes("login")
  const onlySignUp = location.pathname.includes("sign-up")

  return (
    <div>
      {(onlyLogin || onlySignUp) || <Navbar />}
      <Outlet />
      {(onlyLogin || onlySignUp) || <Footer />}
    </div>
  )
}

export default Main
