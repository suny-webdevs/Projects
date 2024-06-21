import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { useEffect, useState } from "react"
import axios from "axios"
import useAuth from "../../hooks/useAuth"
import toast, { Toaster } from "react-hot-toast"
import { FaCaretDown } from "react-icons/fa"

const NavBar = () => {
  const { user, logOut } = useAuth()
  const [menus, setMenus] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("/menus.json").then((res) => setMenus(res.data))
  }, [])

  const handleLogOut = async () => {
    await logOut()
    try {
      toast.success("Logged out")

      navigate("/")
    } catch (err) {
      toast.error(err?.message)
    }
  }

  const links = menus.map((menu) => (
    <li key={menu.id}>
      <NavLink
        to={menu.route}
        className={({ isActive }) =>
          isActive
            ? "text-[#FF3811] text-base font-medium hover:bg-white"
            : "hover:text-[#FF3811] text-base font-medium hover:bg-white"
        }
      >
        {menu.page}
      </NavLink>
    </li>
  ))

  return (
    <div className="container mx-auto">
      <Toaster
        position="top-center"
        reverseOrder="false"
      />
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link>
            <img src={logo} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-3">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {!user && (
            <Link
              to="/login"
              className="px-6 py-2 rounded border border-orange-500 text-[#FF3811] text-base tracking-wide font-semibold hover:bg-[#FF3811] hover:text-white transition-colors duration-300"
            >
              Login
            </Link>
          )}
          {user && (
            <div className="flex items-center gap-7">
              <div className="dropdown dropdown-end">
                {/* <FaCaretDown /> */}
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle hover:bg-white avatar flex flex-col gap-1"
                >
                  <div>
                    <FaCaretDown className="text-lg" />
                  </div>
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
                >
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <Link to="bookings">My Bookings</Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm btn-error mt-5"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              <a className="px-6 py-2 rounded border border-orange-500 text-[#FF3811] text-base tracking-wide font-semibold hover:bg-[#FF3811] hover:text-white transition-colors duration-300 cursor-pointer">
                Appointment
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
