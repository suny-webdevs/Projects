import { Link, NavLink } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"
import toast from "react-hot-toast"
import { FaShoppingCart } from "react-icons/fa"
import useCarts from "../../Hooks/useCarts"

const Navbar = () => {
  const { user, userSignOut } = useAuth()
  const [carts] = useCarts()

  const userCart = carts.filter((cart) => cart.email === user?.email)

  const signOutHandler = () => {
    userSignOut()
      .then(() => {
        toast.success("Sign out successful")
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const menuLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-transparent hover:bg-transparent text-[#EEFF25]"
              : "bg-transparent hover:bg-transparent text-white hover:text-[#EEFF25]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "bg-transparent hover:bg-transparent text-[#EEFF25]"
              : "bg-transparent hover:bg-transparent text-white hover:text-[#EEFF25]"
          }
        >
          Contact us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/user-home"
          className={({ isActive }) =>
            isActive
              ? "bg-transparent hover:bg-transparent text-[#EEFF25]"
              : "bg-transparent hover:bg-transparent text-white hover:text-[#EEFF25]"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/our-menu"
          className={({ isActive }) =>
            isActive
              ? "bg-transparent hover:bg-transparent text-[#EEFF25]"
              : "bg-transparent hover:bg-transparent text-white hover:text-[#EEFF25]"
          }
        >
          Our menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/our-shop/salad"
          className={({ isActive }) =>
            isActive
              ? "bg-transparent hover:bg-transparent text-[#EEFF25]"
              : "bg-transparent hover:bg-transparent text-white hover:text-[#EEFF25]"
          }
        >
          Our shop
        </NavLink>
      </li>
    </>
  )
  return (
    <div>
      <div className="px-5 md:px-10 navbar fixed z-10 top-0 justify-between bg-black bg-opacity-30 backdrop-blur-lg">
        <div className="">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-md bg-transparent hover:bg-transparent shadow-none border-none text-white lg:hidden"
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
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-content uppercase font-medium rounded-box w-52"
            >
              {menuLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-white font-bold uppercase"
          >
            <h1 className="text-3xl">Bistro Boss</h1>
            <p className="text-base tracking-[.6em]">Restaurant</p>
          </Link>
        </div>
        <div className="">
          <ul className="menu menu-horizontal px-1 uppercase font-medium hidden lg:flex">
            {menuLinks}
          </ul>
          <div className="flex items-center gap-3">
            <NavLink
              to="/dashboard/cart"
              className="flex items-center gap-2"
            >
              <FaShoppingCart className="text-xl text-white" />
              <div className="badge badge-sm badge-primary">
                {userCart.length}
              </div>
            </NavLink>
            {!user && (
              <Link to="/login">
                <button className="btn btn-sm bg-transparent hover:bg-transparent text-white hover:text-[#EEFF25] border-none uppercase shadow-none">
                  Login
                </button>
              </Link>
            )}
            {user && (
              <div className="flex items-center gap-3">
                <button
                  onClick={signOutHandler}
                  className="bg-transparent hover:bg-transparent text-white hover:text-[#EEFF25] font-medium uppercase"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
