import { Link, NavLink, useNavigate } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"
import toast from "react-hot-toast"

const NavBar = () => {
  const { user, logOut } = useAuth()
  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await logOut()
      toast.success("Logout successful")
      navigate("/")
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  return (
    <div className="container mx-auto px-5 lg:px-0">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link
            to="/"
            className="text-3xl font-black uppercase"
          >
            SoloSphere
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ul className="menu menu-horizontal px-1 flex items-center gap-2">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {!user && (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/jobs">Add Job</NavLink>
                </li>
                <li>
                  <NavLink to="/addJob">Add Job</NavLink>
                </li>
                <li>
                  <NavLink to="/myBids">My Bids</NavLink>
                </li>
                <li>
                  <NavLink to="/bidRequests">Bid Requests</NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm btn-error mt-2"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
