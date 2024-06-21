import { FaBars, FaBook, FaCalendarAlt, FaHome, FaUsers } from "react-icons/fa"
import { FaBarsProgress, FaCartPlus, FaPhone, FaShop } from "react-icons/fa6"
import { ImSpoonKnife } from "react-icons/im"
import { NavLink, Outlet } from "react-router-dom"
import useCarts from "../Hooks/useCarts"
import useAuth from "../Hooks/useAuth"
import useAdmin from "../Hooks/useAdmin"

const Dashboard = () => {
  const { user } = useAuth()
  const [carts] = useCarts()
  const userCarts = carts.filter((cart) => cart.email === user?.email)

  const [isAdmin] = useAdmin()

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col justify-center items-center">
          <div className="flex items-center justify-start">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-[#D1A054] hover:bg-[#D1A054] text-white text-base drawer-button lg:hidden"
            >
              <FaBars />
            </label>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-72 min-h-full bg-[#D1A054] text-xl font-bold uppercase space-y-3">
            {/* Sidebar content here */}
            <li className="">
              <div className="text-black font-bold uppercase mb-10 flex flex-col">
                <span className="text-3xl leading-none">Bistro Boss</span>
                <span className="text-base tracking-[.6em] leading-none">
                  Restaurant
                </span>
              </div>
            </li>

            {isAdmin ? (
              // Admin
              <>
                <li>
                  <NavLink
                    to="/dashboard/admin-home"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-transparent hover:bg-transparent text-white"
                        : "bg-transparent hover:bg-transparent text-black hover:text-white"
                    }
                  >
                    <FaHome /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/add-items"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-transparent hover:bg-transparent text-white"
                        : "bg-transparent hover:bg-transparent text-black hover:text-white"
                    }
                  >
                    <ImSpoonKnife /> add items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-items"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-transparent hover:bg-transparent text-white"
                        : "bg-transparent hover:bg-transparent text-black hover:text-white"
                    }
                  >
                    <FaBarsProgress /> manage items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-bookings"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-transparent hover:bg-transparent text-white"
                        : "bg-transparent hover:bg-transparent text-black hover:text-white"
                    }
                  >
                    <FaBook /> manage booking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/all-users"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-transparent hover:bg-transparent text-white"
                        : "bg-transparent hover:bg-transparent text-black hover:text-white"
                    }
                  >
                    <FaUsers /> all users
                  </NavLink>
                </li>
              </>
            ) : (
              // User
              <>
                <li>
                  <NavLink
                    to="/dashboard/user-home"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-transparent hover:bg-transparent text-white"
                        : "bg-transparent hover:bg-transparent text-black hover:text-white"
                    }
                  >
                    <FaHome /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/cart"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-transparent hover:bg-transparent text-white"
                        : "bg-transparent hover:bg-transparent text-black hover:text-white"
                    }
                  >
                    <FaCartPlus /> My Cart ({userCarts.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/bookings"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-transparent hover:bg-transparent text-white"
                        : "bg-transparent hover:bg-transparent text-black hover:text-white"
                    }
                  >
                    <FaCalendarAlt /> My Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/reservation"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-transparent hover:bg-transparent text-white"
                        : "bg-transparent hover:bg-transparent text-black hover:text-white"
                    }
                  >
                    <FaHome /> Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payment-history"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-transparent hover:bg-transparent text-white"
                        : "bg-transparent hover:bg-transparent text-black hover:text-white"
                    }
                  >
                    <FaCartPlus /> Payment history
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/add-review"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-transparent hover:bg-transparent text-white"
                        : "bg-transparent hover:bg-transparent text-black hover:text-white"
                    }
                  >
                    <FaCalendarAlt /> Add review
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider before:bg-white after:bg-white"></div>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-transparent hover:bg-transparent text-white"
                    : "bg-transparent hover:bg-transparent text-black hover:text-white"
                }
              >
                <FaHome /> home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="our-menu"
                className={({ isActive }) =>
                  isActive
                    ? "bg-transparent hover:bg-transparent text-white"
                    : "bg-transparent hover:bg-transparent text-black hover:text-white"
                }
              >
                <FaBars /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-shop/salad"
                className={({ isActive }) =>
                  isActive
                    ? "bg-transparent hover:bg-transparent text-white"
                    : "bg-transparent hover:bg-transparent text-black hover:text-white"
                }
              >
                <FaShop /> shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-transparent hover:bg-transparent text-white"
                    : "bg-transparent hover:bg-transparent text-black hover:text-white"
                }
              >
                <FaPhone /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
