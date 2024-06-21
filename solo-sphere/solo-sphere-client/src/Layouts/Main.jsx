import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar/NavBar"
import Footer from "../Components/Footer/Footer"

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-5 lg:px-0 mb-10 md:mb-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
